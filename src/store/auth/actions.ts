import { defaultAction } from 'src/store/defaultAction';
import * as api from './api';
import { SEND_REGISTER, GET_USER, CODE_ACTIVATION } from './types';

export const sendRegistration = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: SEND_REGISTER,
    apiCall: () => { return api.sendRegistration(data); },
    onSuccess: (response: any) => ({ registration: response.data }),
    onError: (response: any) => ({ errorMessage: response.description }),
  });
};

export const login = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_USER,
    apiCall: () => { return api.login(data); },
    onSuccess: (response: any) => ({ user: response.data }),
    onError: (response: any) => ({ errorMessage: response.message }),
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
