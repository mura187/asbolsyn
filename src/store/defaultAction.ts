export const defaultAction = (dispatch: any, getState: any , options: any, responseType?: string) => {
  const callbacks = options.callbacks || {};
  dispatch({ type: options.action.started });
  options.apiCall()
        .then(
            (response: any) => {
              switch (response.status) {
                case 200:
                case 201:
                  response
                    .text()
                    .then(
                      (value: any) => {
                        if (responseType) {
                          const responseObject = `data:image/png;base64,${value}`;
                          dispatch({
                            type: options.action.success,
                            ...options.onSuccess(responseObject),
                          });
                          if (callbacks.onSuccess) {
                            callbacks.onSuccess(options.onSuccess(responseObject));
                          }
                        } else {
                          const responseObject = JSON.parse(value);
                          dispatch({
                            type: options.action.success,
                            ...options.onSuccess(responseObject),
                          });
                          if (callbacks.onSuccess) {
                            callbacks.onSuccess(options.onSuccess(responseObject));
                          }
                        }
                      },
                    );
                  break;
                case 230:
                  response
                    .text()
                    .then(
                        (value: any) => {
                          dispatch({
                            type: options.action.success,
                            ...options.onSuccess(true),
                          });
                          if (callbacks.onSuccess) {
                            callbacks.onSuccess(options.onSuccess(true));
                          }
                        },
                    );
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
                errorMessage: 'Проверьте соединение',
                ...options.onError({ message: 'serverError' }),
              });
            },
        );
};
