import { API_URL } from 'src/constants/server';
import { stdApiPOST, stdApiPUT } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

const authUrl = `${API_URL}api/user/login`;
const checkPhoneUrl = `${API_URL}api/user/checkphone`;
const checkCodeUrl =  `${API_URL}api/user/checkcode`;
const updatePasswordUrl = `${API_URL}api/user/${id}/changepassword`;
const registerUrl =  `${API_URL}api/user/registration`;

export const login = (data: any) => (
    stdApiPOST({ data, url: authUrl })
);

export const checkPhone = (data: any) => (
  stdApiPOST({ data, url: checkPhoneUrl })
);

export const checkCode = (data: any) => (
  stdApiPOST({ data, url: checkCodeUrl })
);

export const register = (data: any) => (
  stdApiPOST({ data, url: registerUrl })
);

export const updatePassword = (data: any) => (
  stdApiPUT({ data, url: updatePasswordUrl })
);
