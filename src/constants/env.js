const {
  NODE_ENV,
  REACT_APP_MODE,
  REACT_APP_AUTH_BASE_URL_PROD,
  REACT_APP_AUTH_BASE_URL_TEST,
  REACT_APP_AUTH_BASE_URL_DEV,
  REACT_APP_BASE_URL_PROD,
  REACT_APP_BASE_URL_TEST,
  REACT_APP_BASE_URL_DEV,
} = process.env;

/** НЕ МЕНЯТЬ РАСШИРЕНИЕ С .js И НЕ УДАЛЯТЬ module.exports*/
module.exports = {
  NODE_ENV,
  REACT_APP_MODE,
  REACT_APP_AUTH_BASE_URL_PROD,
  REACT_APP_AUTH_BASE_URL_TEST,
  REACT_APP_AUTH_BASE_URL_DEV,
  REACT_APP_BASE_URL_PROD,
  REACT_APP_BASE_URL_TEST,
  REACT_APP_BASE_URL_DEV,
  PROXY_AUTH_BASE_URL: process.env["REACT_APP_AUTH_BASE_URL_" + REACT_APP_MODE],
  PROXY_BASE_URL: process.env["REACT_APP_BASE_URL_" + REACT_APP_MODE],
};
