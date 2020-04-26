const  isLoggedIn = () => {
  const token = sessionStorage.hasOwnProperty('token');
  if (token) {
    return true;
  }  return false;
};

export default isLoggedIn;
