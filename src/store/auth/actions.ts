import { defaultAction } from 'src/store/defaultAction';
import * as api from './api';
import { LOGIN, UPDATE_PASSWORD, CHECK_PHONE, CHECK_CODE, REGISTER } from './types';

export const login = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: LOGIN,
    apiCall: () => { return api.login(data); },
    onSuccess: (response: any) => {
      window.location.replace('/');
      sessionStorage.setItem('token', response.Token);
      sessionStorage.setItem('userId', response.User.id);
      return {
        user_token: response.Token,
        user_info: response.User,
      };
    },
    onError: (response: any) => ({ user_token: response.Error }),
  });
};

export const checkPhone = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CHECK_PHONE,
    apiCall: () => { return api.checkPhone(data); },
    onSuccess: (response: any) => {
      console.log('checkphone token changed to ', response.Token);
      sessionStorage.setItem('token', response.Token);
    },
    onError: (response: any) => ({ errorMessage: response.Error }),
  });
};

export const checkCode = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CHECK_CODE,
    apiCall: () => { return api.checkCode(data); },
    onSuccess: (response: any) => {
      console.log('checkcode - token changed to ', response.Token);
      sessionStorage.setItem('token', response.Token);
    },
    onError: (response: any) => ({ errorMessage: response.Error }),
  });
};

export const register = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: REGISTER,
    apiCall: () => { return api.register(data); },
    onSuccess: (response: any) => {
      sessionStorage.setItem('token', response.Token);
      window.location.replace('/cabinet');
    },
    onError: (response: any) => ({ errorMessage: response.Error }),
  });
};

export const updatePassword = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UPDATE_PASSWORD,
    apiCall: () => { return api.updatePassword(data); },
    onSuccess: () => {
      window.location.replace('/cabinet');
    },
    onError: (response: any) => ({ errorPassword: response.Error }),
  });
};

export default{
  login,
  checkPhone,
  checkCode,
  register,
  updatePassword,
};
