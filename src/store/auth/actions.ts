import { defaultAction } from 'src/store/defaultAction';
import * as api from './api';
import { LOGIN, UPDATE_PASSWORD, CHECK_PHONE, CHECK_CODE, REGISTER, RECOVER_CHECK_LOGIN, RECOVER_NEW_PASSWORD, GET_PROFILE } from './types';

export const login = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: LOGIN,
    apiCall: () => { return api.login(data); },
    onSuccess: (response: any) => {
      window.location.replace('/');
      sessionStorage.setItem('token', response.Token);
      sessionStorage.setItem('userId', response.User.id);
      localStorage.setItem('userType', 'consumer');
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

export const updateProfile = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UPDATE_PASSWORD,
    apiCall: () => { return api.updateProfile(data); },
    onSuccess: () => {
      window.location.replace('/cabinet');
    },
    onError: (response: any) => ({ errorPassword: response.Error }),
  });
};

export const recoverCheckLogin = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: RECOVER_CHECK_LOGIN,
    apiCall: () => { return api.recoverCheckLogin(data); },
    onSuccess: (response: any) => {
      sessionStorage.setItem('token', response.Token);
      return ({ number: response.Number });
    },
    onError: (response: any) => {
      window.location.reload();
      (alert('Произошла ошибка либо нет такого пользователя'));
    },
  });
};

export const recoverCheckCode = (data: any, callbacks: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: RECOVER_CHECK_LOGIN,
    apiCall: () => { return api.recoverCheckCode(data); },
    onSuccess: (response: any) => {
      sessionStorage.setItem('token', response.Token);
    },
    onError: (response: any) => ({ errorMessage: response.Error }),
  });
};

export const recoverNewPassword = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: RECOVER_NEW_PASSWORD,
    apiCall: () => { return api.recoverNewPassword(data); },
    onSuccess: () => {
      window.location.replace('/login');
    },
    onError: (response: any) => ({ errorPassword: response.Error }),
  });
};

export const getProfile = (callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_PROFILE,
    apiCall: () => { return api.getProfile(); },
    onSuccess: (response: any) => ({ userInfo: response }),
    onError: (response: any) => ({ errorPassword: response.Error }),
  });
};

export default{
  login,
  checkPhone,
  checkCode,
  register,
  updatePassword,
  updateProfile,
  recoverCheckLogin,
  recoverCheckCode,
  recoverNewPassword,
  getProfile,
};
