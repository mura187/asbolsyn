import { API_URL } from 'src/constants/server';
import { stdApiPOST, stdApiGET, stdApiPATCH } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

const getConsumerDealsUrl = `${API_URL}api/consumer/${id}/deal`;
const getProducerDealsUrl = `${API_URL}api/producer/${id}/deal`;

export const createDeal = (data: any, offerId: string) => (
  stdApiPOST({ data, url: `${API_URL}api/consumer/${id}/offer/${offerId}` })
);

export const getActiveDeals = (active: boolean) => (
  stdApiGET({ url: `${getConsumerDealsUrl}?onlyactive=${active}`  })
);

export const getProducerDeals = (active: boolean) => (
  stdApiGET({ url: `${getProducerDealsUrl}?onlyactive=${active}` })
);

export const completeDeal = (dealId: string) => (
  stdApiPATCH({ url: `${API_URL}api/deal/${dealId}/complete` })
);
