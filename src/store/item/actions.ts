import { defaultAction } from 'src/store/defaultAction';
import * as api from 'src/store/item/api';
import { GET_ITEMS, CREATE_OFFER } from 'src/store/item/types';

export const getItems = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_ITEMS,
    apiCall: () => {
      return api.getItems();
    },
    onSuccess: (response: any) => ({ list: response }),
    onError: (response: any) => ({ errorMessage: response.description }),
  });
};

export const createOffer = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CREATE_OFFER,
    apiCall: () => { return api.createOffer(data); },
    onSuccess: (response: any) => {
      window.location.replace('/');
      return { user_token: response.Token };
    },
    onError: (response: any) => {
      console.log('token-error');
      response.Error === "Couldn't find token" && window.location.replace('/login');
      return { user_token: response.Error };
    },
  });
};

export default{
  getItems,
  createOffer,
};