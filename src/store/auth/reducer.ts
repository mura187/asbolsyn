import { combineReducers } from 'redux';
import { ILoadTypes } from 'src/store/types';
import { CODE_ACTIVATION, GET_USER, SEND_REGISTER, LOGIN } from './types';

const user = (
    state = { data: null, loading: false }, action: any): ILoadTypes<any | null> => {
  switch (action.type) {
    case GET_USER.failed:
      return {
        data: null,
        errorMessage: action.errorMessage,
        loading: true,
      };
    case GET_USER.success:
      if (!action.user) {
        return {
          data: null,
          errorMessage: undefined,
          loading: false,
        };
      }
      return {
        data: action.user,
        errorMessage: undefined,
        loading: false,
      };
    case GET_USER.started:
      return {
        data: null,
        errorMessage: undefined,
        loading: true,
      };
    default:
      return state;
  }
};

const register = (
    state = { data: null, loading: false }, action: any): ILoadTypes<any | null> => {
  switch (action.type) {
    case SEND_REGISTER.failed:
      return {
        data: null,
        errorMessage: action.errorMessage,
        loading: true,
      };
    case SEND_REGISTER.success:
      if (!action.registration) {
        return {
          data: null,
          errorMessage: undefined,
          loading: false,
        };
      }
      return {
        data: action.registration,
        errorMessage: undefined,
        loading: false,
      };
    case SEND_REGISTER.started:
      return {
        data: null,
        errorMessage: undefined,
        loading: true,
      };
    default:
      return state;
  }
};

const userToken = (state = null, action: any) => {
  switch (action.type) {
    case LOGIN.success:
      return (action.user_token || null);
    case LOGIN.failed:
      return (action.user_error || null);
    default:
      return state;
  }
};

const token = (
  state = { data: null, loading: false }, action: any): ILoadTypes<any | null> => {
  switch (action.type) {
    case CODE_ACTIVATION.failed:
      return {
        data: null,
        errorMessage: action.errorMessage,
        loading: true,
      };
    case CODE_ACTIVATION.success:
      if (!action.token) {
        return {
          data: null,
          errorMessage: undefined,
          loading: false,
        };
      }
      return {
        data: action.token,
        errorMessage: undefined,
        loading: false,
      };
    case CODE_ACTIVATION.started:
      return {
        data: null,
        errorMessage: undefined,
        loading: true,
      };
    default:
      return state;
  }
};

const authReducer = combineReducers({
  register,
  user,
  token,
  userToken,
});

export default authReducer;
