import { defaultAction } from 'src/store/defaultAction';
import * as api from 'src/store/deal/api';
import {
  CREATE_DEAL,
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

export default {
  createDeal,
};
