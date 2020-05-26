import { defaultAction } from 'src/store/defaultAction';
import * as api from 'src/store/deal/api';
import {
  CREATE_DEAL,
  GET_ACTIVE_DEALS,
  GET_PRODUCER_DEALS,
  COMPLETE_DEAL,
} from 'src/store/deal/types';

export const createDeal = (data: any, offerId: string, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CREATE_DEAL,
    apiCall: () => { return api.createDeal(data, offerId); },
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

export const getActiveDeals = (active: boolean, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_ACTIVE_DEALS,
    apiCall: () => { return api.getActiveDeals(active); },
    onSuccess: (response: any) => ({ list: response }),
    onError: (response: any) => ({ errorPassword: response.Error }),
  });
};

export const getProducerDeals = (active: boolean, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: GET_PRODUCER_DEALS,
    apiCall: () => { return api.getProducerDeals(active); },
    onSuccess: (response: any) => ({ list: response }),
    onError: (response: any) => ({ errorPassword: response.Error }),
  });
};

export const completeDeal = (dealId: string, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: COMPLETE_DEAL,
    apiCall: () => { return api.completeDeal(dealId); },
    onSuccess: () => (window.location.reload()),
    onError: (response: any) => ({ errorPassword: response.Error }),
  });
};

export default {
  createDeal,
  getActiveDeals,
  getProducerDeals,
  completeDeal,
};
