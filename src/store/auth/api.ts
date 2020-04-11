import { API_URL } from 'src/constants/server';
import { stdApiPOST, stdApiPUT } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

const registrationUrl = `${API_URL}auth/create_activation`;
const codeUrl = `${API_URL}auth/confirm_activation/`;
const authUrl = `${API_URL}api/user/login`;
const updatePasswordUrl = `${API_URL}api/user/${id}/changepassword`;

export const sendRegistration = (data: any) => (
    stdApiPOST({ data, url: registrationUrl })
);

export const login = (data: any) => (
    stdApiPOST({ data, url: authUrl })
);

export const confirmActivation = (data: any) => (
  stdApiPOST({ data: data.userCode, url: `${codeUrl}${data.uuid}` })
);

export const updatePassword = (data: any) => (
  stdApiPUT({ data, url: updatePasswordUrl })
);
