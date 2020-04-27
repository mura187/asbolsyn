import { API_URL } from 'src/constants/server';
import { stdApiPOST, stdApiPUT, stdApiGET } from 'src/store/defaultApi';

const id = sessionStorage.getItem('userId');

// Login
const authUrl = `${API_URL}api/user/login`;

// Register
const checkPhoneUrl = `${API_URL}api/user/checkphone`;
const checkCodeUrl =  `${API_URL}api/user/checkcode`;
const updatePasswordUrl = `${API_URL}api/user/${id}/changepassword`;
const registerUrl =  `${API_URL}api/user/registration`;

// Forgot Recover password
const recoverCheckLoginUrl = `${API_URL}api/user/forgot/login`;
const recoverCheckCodeUrl =  `${API_URL}api/user/forgot/checkcode`;
const recoverNewPasswordUrl =  `${API_URL}api/user/forgot/newpassword`;

const getProfileUrl = `${API_URL}api/user/${id}`;
const updateProfileUrl = `${API_URL}api/user/${id}`;

export const login = (data: any) => (
    stdApiPOST({ data, url: authUrl })
);

export const getProfile = () => (
  stdApiGET({ url: getProfileUrl })
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

export const updateProfile = (data: any) => (
  stdApiPUT({ data, url: updateProfileUrl })
);

export const recoverCheckLogin = (data: any) => (
  stdApiPOST({ data, url: recoverCheckLoginUrl })
);

export const recoverCheckCode = (data: any) => (
  stdApiPOST({ data, url: recoverCheckCodeUrl })
);

export const recoverNewPassword = (data: any) => (
  stdApiPOST({ data, url: recoverNewPasswordUrl })
);
