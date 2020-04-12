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
