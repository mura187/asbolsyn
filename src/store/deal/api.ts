import { API_URL } from 'src/constants/server';
import { stdApiPOST } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

export const createDeal = (data: any, offerId: string) => (
  stdApiPOST({ data, url: `${API_URL}api/consumer/${id}/offer/${offerId}` })
);
