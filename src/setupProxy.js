const { createProxyMiddleware } = require("http-proxy-middleware");
const VITE_KORSERVICE_URL = import.meta.env.VITE_KORSERVICE_URL;

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/detailCommon1", "/detailIntro1", "/detailInfo1"], {
      target: VITE_KORSERVICE_URL,
      changeOrigin: true,
    })
  );
};

//참고. https://velog.io/@ye-ji/%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-API-CORS-%EC%98%A4%EB%A5%98-%EB%B0%B0%ED%8F%AC-%EC%8B%9C%EC%97%90%EB%8F%84-%EB%82%9C-%EC%98%A4%EB%A5%98
