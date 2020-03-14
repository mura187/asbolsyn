import { STD_HEADERS } from 'src/constants/server';

const modifyHeader = (options: any) => {
  const headers = { ...STD_HEADERS };

  if (!!options.token) {
    // headers['Authorization'] = `Bearer ${options.token}`;
  }

  if (!!options.lang) {
    // headers['Accept-Language'] = options.lang;
  }
  return headers;
};

export const stdApiPOST = (options: any) => {
  return (
    fetch(
      options.url,
      {
        method: 'POST',
        headers: modifyHeader(options),
        body: JSON.stringify(options.data || {}),
      },
    )
  );
};

export const stdApiGET = (options: any) => {
  return (
    fetch(
      options.url,
      {
        method: 'GET',
        headers: modifyHeader(options),
      },
    )
  );
};

export const stdApiPUT = (options: any) => {
  return (
    options.data ?
    fetch(
      options.url,
      {
        method: 'PUT',
        headers: modifyHeader(options),
        body: JSON.stringify(options.data || {}),
      },
    )
    :
    fetch(
      options.url,
      {
        method: 'PUT',
        headers: modifyHeader(options),
      },
    )
  );
};
