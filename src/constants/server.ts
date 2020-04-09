export const STD_HEADERS = {
  Accept: 'application/json, application/xml, text/plain, text/html, *.*',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const env = process.env.NODE_ENV;
export const API_URL = (
  env === 'production' ?
    // prod
    'http://185.22.67.118:8080/'
  : env === 'development' ?
    // dev
    'http://185.22.67.118:8080/'
  :
    // local
    'http://185.22.67.118:8080/'
);
