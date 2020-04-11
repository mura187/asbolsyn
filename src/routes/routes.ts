import loadable from 'loadable-components';

export const Main = loadable(() => import('src/pages/Main'), {
  modules: ['main'],
});
export const Map = loadable(() => import('src/pages/Map'), {
  modules: ['map'],
});
export const Cabinet = loadable(() => import('src/pages/Cabinet'), {
  modules: ['cabinet'],
});
export const Password = loadable(() => import('src/pages/Cabinet/PasswordUpdatePage'), {
  modules: ['cabinet/password'],
});
export const Detail = loadable(() => import('src/pages/Detail'), {
  modules: ['detail'],
});
export const Login = loadable(() => import('src/pages/Login'), {
  modules: ['login'],
});
export const Offer = loadable(() => import('src/pages/Offer'), {
  modules: ['offer'],
});

// export const PageNotFound = loadable(() => import('../pages/pageNotFound'), {
//   modules: ['pageNotFound'],
// });
// export const PrivateRoute = loadable(
//   () => import('../components/privateRoute/PrivateRoute'),
//   { modules: ['PrivateRoute'] },
// );
