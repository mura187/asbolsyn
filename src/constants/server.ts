const env = process.env.NODE_ENV;
export const API_URL = (
  env === 'production' ?
    // prod
    'http://52.58.74.111:8080/'
  : env === 'development' ?
    // dev
    'http://52.58.74.111:8080/'
  :
    // local
    'http://52.58.74.111:8080/'
);
