import React from 'react';
import { Route, Switch } from 'react-router';
import { Main, Cabinet, Detail, Login, Map, Offer, Password, Register, Request, Forgot } from './routes';
import isLoggedIn from 'src/utils/isLoggedIn';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/cabinet" component={ isLoggedIn() ? Cabinet : Login} />
      <Route path="/cabinet/password" component={isLoggedIn() ? Password : Login} />
      <Route path="/detail" component={isLoggedIn() ? Detail : Login} />
      <Route exact path="/login" component={Login} />
      <Route path="/login/forgot" component={Forgot} />
      <Route path="/register" component={Register} />
      <Route path="/map" component={Map} />
      <Route path="/offer" component={isLoggedIn() ? Offer : Login} />
      <Route path="/request" component={isLoggedIn() ? Request : Login} />
    </Switch>
  );
};

export default MainRoutes;
