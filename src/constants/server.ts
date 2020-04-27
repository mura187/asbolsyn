const env = process.env.NODE_ENV;
export const API_URL = (
  env === 'production' ?
    // prod
    'https://52.58.74.111:8080/'
  : env === 'development' ?
    // dev
    'https://52.58.74.111:8080/'
  :
    // local
    'https://52.58.74.111:8080/'
);

