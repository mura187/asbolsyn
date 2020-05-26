import { combineReducers } from 'redux';
import { ILoadTypes } from 'src/store/types';
import { GET_USER, LOGIN,
  UPDATE_PASSWORD, RECOVER_CHECK_LOGIN, GET_PROFILE,
  GET_ALL_USERS,
} from './types';

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
    case GET_PROFILE.success:
      return (action.userInfo || null);
    case GET_PROFILE.failed:
      return (action.errorMessage || null);
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

const userNumber = (state = null, action: any) => {
  switch (action.type) {
    case RECOVER_CHECK_LOGIN.success:
      return (action.number || null);
    case RECOVER_CHECK_LOGIN.failed:
      return (action.errorMessage || null);
    default:
      return state;
  }
};

const users = (
  state = { data: null, loading: false }, action: any): ILoadTypes<any | null> => {
  switch (action.type) {
    case GET_ALL_USERS.failed:
      return {
        data: null,
        errorMessage: action.errorMessage,
        loading: true,
      };
    case GET_ALL_USERS.success:
      if (!action.data) {
        return {
          data: null,
          errorMessage: undefined,
          loading: false,
        };
      }
      return {
        data: action.data,
        errorMessage: undefined,
        loading: false,
      };
    case GET_ALL_USERS.started:
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
  user,
  users,
  userToken,
  userInfo,
  errorPassword,
  userNumber,
});

export default authReducer;
