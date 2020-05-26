import { stdApiPOST } from 'src/store/defaultApi';
import { API_URL } from 'src/constants/server';

const id = sessionStorage.getItem('userId');

export const createFeedback = (data: any, dealId: string) => (
  stdApiPOST({ data, url: `${API_URL}api/consumer/${id}/deal/${dealId}/feedback` })
);
