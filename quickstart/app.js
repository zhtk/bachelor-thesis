var express = require('express')
var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');
var grpc = require('grpc');
var morgan = require('morgan');

var authDescriptor = grpc.load(__dirname + '/auth/auth.proto');
var authChannel = new authDescriptor.AuthService('207.154.212.228:50051', grpc.credentials.createInsecure());

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
  console.log("przyszlo zapytanie");
  
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

const SENT_MESSAGES = [
  {id: 1, from: 'Adresat Pierwszy', date: '2017-04-01', topic: 'Dzień dobry', content: ' we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pain'},
  {id: 2, from: 'Pan Adresat', date: '2017-02-01', topic: 'Odprowadź składki!', content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur'},
  {id: 3, from: 'Man Doe', date: '2017-06-01', topic: 'Re: Ważne!', content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'},
  {id: 4, from: 'John Doe', date: '2017-01-01', topic: 'Re: Ważne!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident'},
  {id: 5, from: 'Abigail xxtt', date: '2017-01-01', topic: 'Re: Wniosek 500+', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '},
  {id: 6, from: 'John Doe2', date: '2017-01-15', topic: 'Re: Re: Ważne!', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '},
  {id: 7, from: 'John Doe1', date: '2017-01-11', topic: 'Ubezpiecz się', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum '},
];

app.get('/msgget', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(SENT_MESSAGES));
});

app.use('/api', proxy);

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/src' ));

app.get('*', function(req, res) {
  res.sendfile('./src/index.html');
});

app.listen(3000, function () {
  console.log('Server started on port 3000!')
});
