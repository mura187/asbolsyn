import { defaultAction } from 'src/store/defaultAction';
import * as api from 'src/store/item/api';
import { GET_ITEMS } from 'src/store/item/types';

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

export default{
  getItems,
};
