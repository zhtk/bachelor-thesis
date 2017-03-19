
var proxyMiddleware = require('http-proxy-middleware');
var fallbackMiddleware = require('connect-history-api-fallback');

var onProxyRes = function (proxyRes, req, res) {
  // remove header from response
  delete proxyRes.headers['content-security-policy-report-only'];
  delete proxyRes.headers['content-security-policy'];
};

module.exports = {
    server: {
        middleware: {
            1: proxyMiddleware('/api', {
                target: 'http://207.154.212.228:9000',
                changeOrigin: false,   // for vhosted sites, changes host header to match to target's host
                ws: true,
                //onProxyRes
            }),

            2: fallbackMiddleware({
                index: '/index.html', verbose: true
            })
        },
        baseDir: "src",
        routes: {
            "/node_modules": "node_modules"
        }
    }
};