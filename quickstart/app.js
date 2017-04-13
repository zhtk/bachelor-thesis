var express = require('express')
var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');
var grpc = require('grpc');
var morgan = require('morgan');

var authDescriptor = grpc.load(__dirname + '/auth/auth.proto');
var authChannel = new authDescriptor.AuthService('localhost:50051', grpc.credentials.createInsecure());

var proxy = proxyMiddleware({
  target: 'http://207.154.212.228:9000',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api/' : '/'
  }
});

var app = express();
app.use(morgan('combined'));

app.get('/login', function (req, res) {
  if (req.query.login == null || req.query.password == null) {
    res.status(403).end();
    return;
  }
  
  var loginData = {login: req.query.login, password: req.query.password};

  authChannel.getToken(loginData, function(err, data) {
    if (err) {
      res.status(404).end();
    } else {
      var status = data.status;
      var token = data.token;

      // Wypisz wynik do response
      if (status == 'OK') {
        res.send(token);
      } else {
        // Invalid login
        res.status(403).end();
      }
    }
  });
});

app.get('/logout', function (req, res) {
  if (req.query.token == null) {
    res.status(403).end();
    return;
  }
  
  var data = {token: req.query.token};
  authChannel.invalidateToken(data, function(err, data) {
    if (err) {
      res.status(404).end();
    } else {
      res.end();
    }
  });
});

app.use('/api', proxy);

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src' ));


app.listen(3000, function () {
  console.log('Server started on port 3000!')
});
