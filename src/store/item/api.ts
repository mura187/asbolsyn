import { API_URL } from 'src/constants/server';
import { stdApiGET, stdApiPOST } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

const itemsUrl = `${API_URL}api/offer`;
const createOfferUrl = `${API_URL}api/producer/${id}/offer`;

export const getItems = () => (
  stdApiGET({ url: `${itemsUrl}` })
);

export const createOffer = (data: any) => (
  stdApiPOST({ data, url: `${createOfferUrl}` })
);
