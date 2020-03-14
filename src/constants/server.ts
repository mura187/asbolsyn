export const STD_HEADERS = {
  Accept: 'application/json, application/xml, text/plain, text/html, *.*',
  'Content-Type': 'application/json',
};

const env = process.env.NODE_ENV;
export const API_URL = (
  env === 'production' ?
    // prod
    'prodlink'
  : env === 'development' ?
    // dev
    'devlink'
  :
    // local
    'devlink'
);
