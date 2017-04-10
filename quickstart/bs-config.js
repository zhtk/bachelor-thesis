"use strict";
var browserSync = require('browser-sync');

var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');

var grpc = require('grpc');
var authDescriptor = grpc.load(__dirname + '/auth/auth.proto');
var authChannel = new authDescriptor.AuthService('localhost:50051', grpc.credentials.createInsecure());

var onProxyRes = function (proxyRes, req, res) {
  // remove header from response
  delete proxyRes.headers['content-security-policy-report-only'];
  delete proxyRes.headers['content-security-policy'];
};

function authMiddleware (req, res, next) {
    // TODO rodzaj operacji
    var isLogin = false;
    var isLogout = false;
    
    // TODO wyciągnięcie loginu i hasła (lub tokenu jeśli logout) z requesta
    // ...
    
    if (isLogin) {
        // TODO podmienić to na sensowne wartości        
        var loginData = {login: "admin", password: "admin"};
        authChannel.getToken(loginData, function(err, data) {
            if (err) {
                // Error
                // TODO
            } else {
                var status = data.status;
                var token = data.token;
                
                // Wypisz wynik do response
                if (status == authDescriptor.LoginResponse.Status.OK) {
                    // Oddaj klientowi token
                    // TODO
                } else {
                    // Invalid login
                    // TODO
                }
            }
        });
    } else if (isLogout) {
        var data = {token: "admin"};
        authChannel.invalidateToken(data, function(err, data) {
            if (err) {
                // Error, nie można się wylogować
                // TODO
            } else {
                // Wypisujemy klientowi, że się wylogował
                // TODO
            }
        });
    } else {
        // Request nie dotyczy logowania
        // Ładujemy normalną stronę
        next();
    }
}

module.exports = {
    server: {
        middleware: {
            1: proxyMiddleware('/api', {
                //target: 'http://students.mimuw.edu.pl/~js347267',
                target: 'http://207.154.212.228:9000',
                changeOrigin: false,   // for vhosted sites, changes host header to match to target's host
                ws: true,
                //onProxyRes
            }),
            
            2: authMiddleware,

            3: fallbackMiddleware({
                index: '/index.html', verbose: true
            })
        },
        baseDir: "src",
        routes: {
            "/node_modules": "node_modules"
        }
    }
};
