import { API_URL } from 'src/constants/server';
import { stdApiGET, stdApiPOST, stdApiPUT } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

const itemsUrl = `${API_URL}api/offer`;
const myItemsUrl = `${API_URL}api/producer/${id}/offer`;
const myRequestsUrl = `${API_URL}api/consumer/${id}/request`;
const requestsUrl = `${API_URL}api/request`;
const createOfferUrl = `${API_URL}api/producer/${id}/offer`;
const createRequestUrl = `${API_URL}api/consumer/${id}/request`;

export const getItems = () => (
  stdApiGET({ url: `${itemsUrl}` })
);

export const getMyItems = () => (
  stdApiGET({ url: `${myItemsUrl}` })
);

export const getRequests = () => (
  stdApiGET({ url: `${requestsUrl}` })
);

export const getMyRequests = () => (
  stdApiGET({ url: `${myRequestsUrl}` })
);

export const createOffer = (data: any) => (
  stdApiPOST({ data, url: `${createOfferUrl}` })
);
export const createRequest = (data: any) => (
  stdApiPOST({ data, url: `${createRequestUrl}` })
);

export const updateItem = (data: any, producerId: string, offerId: string) => (
  stdApiPUT({ data, url: `${API_URL}api/producer/${producerId}/offer/${offerId}` })
);

export const updateRequest = (data: any, consumerId: string, requestId: string) => (
  stdApiPUT({ data, url: `${API_URL}api/consumer/${consumerId}/request/${requestId}` })
);