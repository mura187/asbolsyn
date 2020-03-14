import { API_URL } from 'src/constants/server';
import { stdApiPOST } from 'src/store/defaultApi';

const registrationUrl = `${API_URL}auth/create_activation`;
const codeUrl = `${API_URL}auth/confirm_activation/`;
const authUrl = `${API_URL}auth/register`;

export const sendRegistration = (data: any) => (
    stdApiPOST({ data, url: registrationUrl })
);

export const login = (data: any) => (
    stdApiPOST({ data, url: authUrl })
);

export const confirmActivation = (data: any) => (
  stdApiPOST({ data: data.userCode, url: `${codeUrl}${data.uuid}` })
);
