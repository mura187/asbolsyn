import { combineReducers } from 'redux';
import { ILoadTypes } from 'src/store/types';
import { GET_USER, LOGIN, UPDATE_PASSWORD } from './types';

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

const userInfo = (state = null, action: any) => {
  switch (action.type) {
    case LOGIN.success:
      return (action.user_info || null);
    case LOGIN.failed:
      return (action.user_error || null);
    default:
      return state;
  }
};

const errorPassword = (state = null, action: any) => {
  switch (action.type) {
    case UPDATE_PASSWORD.success:
      return (action.user_info || null);
    case UPDATE_PASSWORD.failed:
      return (action.errorPassword || null);
    default:
      return state;
  }
};

const authReducer = combineReducers({
  user,
  userToken,
  userInfo,
  errorPassword,
});

export default authReducer;
