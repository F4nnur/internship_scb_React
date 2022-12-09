const { createProxyMiddleware } = require("http-proxy-middleware");
const ENV = require("./constants/env.js");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: `https://${ENV.PROXY_BASE_URL}`,
      changeOrigin: true,
    })
  );
};
