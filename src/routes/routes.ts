import loadable from 'loadable-components';

export const Main = loadable(() => import('src/pages/Main'), {
  modules: ['main'],
});
export const Cabinet = loadable(() => import('src/pages/Cabinet'), {
  modules: ['cabinet'],
});
export const Detail = loadable(() => import('src/pages/Detail'), {
  modules: ['detail'],
});
export const Login = loadable(() => import('src/pages/Login'), {
  modules: ['login'],
});

// export const PageNotFound = loadable(() => import('../pages/pageNotFound'), {
//   modules: ['pageNotFound'],
// });
// export const PrivateRoute = loadable(
//   () => import('../components/privateRoute/PrivateRoute'),
//   { modules: ['PrivateRoute'] },
// );
