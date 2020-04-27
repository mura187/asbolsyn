const env = process.env.NODE_ENV;
export const API_URL = (
  env === 'production' ?
    // prod
    'https://0.0.0.0:8080/'
  : env === 'development' ?
    // dev
    'https://0.0.0.0:8080/'
  :
    // local
    'https://0.0.0.0:8080/'
);
