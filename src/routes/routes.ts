import loadable from 'loadable-components';

export const Main = loadable(() => import('src/pages/Main'), {
  modules: ['main'],
});
export const Category = loadable(() => import('src/pages/Category'), {
  modules: ['category'],
});
export const Detail = loadable(() => import('src/pages/Detail'), {
  modules: ['detail'],
});

// export const PageNotFound = loadable(() => import('../pages/pageNotFound'), {
//   modules: ['pageNotFound'],
// });
// export const PrivateRoute = loadable(
//   () => import('../components/privateRoute/PrivateRoute'),
//   { modules: ['PrivateRoute'] },
// );
