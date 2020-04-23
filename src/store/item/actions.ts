import { defaultAction } from 'src/store/defaultAction';
import * as api from 'src/store/item/api';
import {
  GET_ITEMS,
  CREATE_OFFER,
  CREATE_REQUEST,
  GET_REQUESTS,
  UPDATE_OFFER,
  GET_MY_ITEMS, 
  UPDATE_REQUEST,
  GET_MY_REQUESTS} from 'src/store/item/types';

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

export const getMyItems = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_MY_ITEMS,
    apiCall: () => {
      return api.getMyItems();
    },
    onSuccess: (response: any) => ({ myItems: response }),
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
      response.Error === "Couldn't find token" && window.location.replace('/login');
      return { user_token: response.Error };
    },
  });
};

export const getRequests = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_REQUESTS,
    apiCall: () => {
      return api.getRequests();
    },
    onSuccess: (response: any) => ({ list: response }),
    onError: (response: any) => ({ errorMessage: response.description }),
  });
};

export const createRequest = (data: any, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CREATE_REQUEST,
    apiCall: () => { return api.createRequest(data); },
    onSuccess: (response: any) => {
      window.location.replace('/');
      return { user_token: response.Token };
    },
    onError: (response: any) => {
      response.Error === "Couldn't find token" && window.location.replace('/login');
      return { user_token: response.Error };
    },
  });
};

export const updateItem = (data: any, producerId: string, offerId: string, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UPDATE_OFFER,
    apiCall: () => { return api.updateItem(data, producerId, offerId); },
    onSuccess: (response: any) => {
      alert('Данные обновлены!');
      return { user_token: response.Token };
    },
    onError: (response: any) => {
      response.Error === "Couldn't find token" && window.location.replace('/login');
      return { user_token: response.Error };
    },
  });
};

export const updateRequest = (data: any, consumerId: string, requestId: string, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: UPDATE_REQUEST,
    apiCall: () => { return api.updateRequest(data, consumerId, requestId); },
    onSuccess: (response: any) => {
      alert('Данные обновлены!');
      return { user_token: response.Token };
    },
    onError: (response: any) => {
      response.Error === "Couldn't find token" && window.location.replace('/login');
      return { user_token: response.Error };
    },
  });
};

export const getMyRequests = (callbacks?: any) => (dispatch: any, getState: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_MY_REQUESTS,
    apiCall: () => {
      return api.getMyRequests();
    },
    onSuccess: (response: any) => ({ myRequests: response }),
    onError: (response: any) => ({ errorMessage: response.description }),
  });
};

export default{
  getItems,
  getMyItems,
  createOffer,
  getRequests,
  getMyRequests,
  createRequest,
  updateItem,
  updateRequest,
};
