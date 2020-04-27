const env = process.env.NODE_ENV;
export const API_URL = (
  env === 'production' ?
    // prod
    'http://0.0.0.0:8080/'
  : env === 'development' ?
    // dev
    'http://0.0.0.0:8080/'
  :
    // local
    'http://0.0.0.0:8080/'
);
