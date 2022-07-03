const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/lms/*', { 
    target: 'https://uat-api.vidyuttech.com',
    changeOrigin: true
}
));
};

//5.0.1

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/lms/*',
//     createProxyMiddleware({
//       target: 'https://uat-api.vidyuttech.com',
//       changeOrigin: true,
//     })
//   );
// };