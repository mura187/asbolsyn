import { defaultAction } from 'src/store/defaultAction';
import { CREATE_FEEDBACK } from 'src/store/feedback/types';
import * as api from 'src/store/feedback/api';

export const createFeedback = (data: any, dealId: string, callbacks?: any) => (dispatch?: any, getState?: any) => {
  defaultAction(dispatch, getState, {
    callbacks,
    action: CREATE_FEEDBACK,
    apiCall: () => { return api.createFeedback(data, dealId); },
    onSuccess: (response: any) => {
      window.location.reload();
    },
    onError: (response: any) => {
    },
  });
};

export default {
  createFeedback,
};
