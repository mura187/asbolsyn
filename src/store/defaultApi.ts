const modifyHeader = (options: any) => {
  const headers = { ...{
    Accept: 'application/json, application/xml, text/plain, text/html, *.*',
    Token: `${sessionStorage.getItem('token')}`,
    'Content-Type': 'application/json',
  } };

  if (!!options.token) {
    headers['Token'] = `Bearer ${options.token}`;
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

export const stdApiDELETE = (options: any) => (
  fetch(
    options.url,
    {
      method: 'DELETE',
      headers: modifyHeader(options),
      body: JSON.stringify(options.data || {}),
    },
  )
);

export const stdApiPATCH = (options: any) => (
  fetch(
    options.url,
    {
      method: 'PATCH',
      headers: modifyHeader(options),
      body: JSON.stringify(options.data || {}),
    },
  )
);
