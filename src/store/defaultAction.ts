export const defaultAction = (dispatch: any, getState: any , options: any) => {
  const callbacks = options.callbacks || {};
  dispatch({ type: options.action.started, ...options.withStart });
  options.apiCall()
    .then(
      (response: any) => {
        switch (response.status) {
          case 200:
            response
              .text()
              .then(
                (value: any) => {
                  const responseObject = JSON.parse(value);
                  if (responseObject.code === 0) {
                    dispatch({
                      type: options.action.success,
                      ...options.onSuccess(responseObject),
                    });
                    if (callbacks.onSuccess) {
                      callbacks.onSuccess(options.onSuccess(responseObject));
                    }
                  } else {
                    dispatch({
                      type: options.action.failed,
                      ...options.onError(responseObject),
                    });
                  }
                },
              );
            break;
          case 400:
          case 404:
          case 412:
            response
            .json()
            .then((val: any) => {
              dispatch({
                type: options.action.failed,
                ...options.onError({ message: val.message || 'serverError', status: val.status }),
              });
            });
            break;
          case 500:
            response
            .text()
            .then((val: any) => {
              dispatch({
                type: options.action.failed,
                ...options.onError({ message: 'serverError' }),
              });
            });
            break;
          case 504:
            response
              .text()
              .then((val: any) => {
                dispatch({
                  type: options.action.failed,
                  ...options.onError({ message: 'serverError' }),
                });
              });
            break;
          default:
            dispatch({
              type: options.action.failed,
              errorMessage: `Ошибка #${response.status}`,
            });
        }
      },
      (error: any) => {
        dispatch({
          type: options.action.failed,
          errorMessage: 'Проверьте соеденение',
          ...options.onError({ message: 'serverError' }),
        });
      },
    );
};
