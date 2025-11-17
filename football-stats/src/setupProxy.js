const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.sportmonks.com',
      changeOrigin: true,
    })
  );
};

const response = await fetch(`/api/v3/soccer/leagues?api_token=$11ZyvmYqG7Sr9aBib6PKloPt3NcMOoMbhPfUdwPGH6xnkyUgVEAlQUyg1jYL}`);