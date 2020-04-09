import React from 'react';
import { Route, Switch } from 'react-router';
import { Main, Cabinet, Detail, Login } from './routes';
// import LogoutRoute from '../components/logoutRoute';
// import PrivateRoute from '../components/privateRoute';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/cabinet" component={Cabinet} />
      <Route path="/detail" component={Detail} />
      <Route path="/login" component={Login} />
      {/* <PrivateRoute path="/protected" component={Protected} /> */}
      {/* <LogoutRoute path="/logout" /> */}
      {/* <Route path="*" component={PageNotFound} /> */}
    </Switch>
  );
};

export default MainRoutes;
