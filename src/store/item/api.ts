import { API_URL } from 'src/constants/server';
import { stdApiGET } from 'src/store/defaultApi';

const itemsUrl = `${API_URL}api/offer`;

export const getItems = () => (
  stdApiGET({ url: `${itemsUrl}` })
);
