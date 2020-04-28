import { API_URL } from 'src/constants/server';
import { stdApiPOST, stdApiGET, stdApiPATCH } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

const getActiveDealsUrl = `${API_URL}api/consumer/${id}/deal?onlyactive=true`;
const getProducerDealsUrl = `${API_URL}api/producer/${id}/deal?onlyactive=true`;

export const createDeal = (data: any, offerId: string) => (
  stdApiPOST({ data, url: `${API_URL}api/consumer/${id}/offer/${offerId}` })
);

export const getActiveDeals = () => (
  stdApiGET({ url: getActiveDealsUrl  })
);

export const getProducerDeals = () => (
  stdApiGET({ url: getProducerDealsUrl })
);

export const completeDeal = (dealId: string) => (
  stdApiPATCH({ url: `${API_URL}api/deal/${dealId}/complete` })
);
