import { defaultAction } from 'src/store/defaultAction';
import * as api from './api';
import { SEND_REGISTER, CODE_ACTIVATION, LOGIN } from './types';

export const sendRegistration = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: SEND_REGISTER,
    apiCall: () => { return api.sendRegistration(data); },
    onSuccess: (response: any) => ({ registration: response.data }),
    onError: (response: any) => ({ errorMessage: response.description }),
  });
};

export const login = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: LOGIN,
    apiCall: () => { return api.login(data); },
    onSuccess: (response: any) => {
      window.location.replace('');
      return { user_token: response.Token };
    },
    onError: (response: any) => ({ user_token: response.Error }),
  });
};

export const confirmActivation = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CODE_ACTIVATION,
    apiCall: () => { return api.confirmActivation(data); },
    onSuccess: (response: any) => ({ token: response.data }),
    onError: (response: any) => ({ errorMessage: response.description }),
  });
};

export default{
  sendRegistration,
  login,
  confirmActivation,
};
