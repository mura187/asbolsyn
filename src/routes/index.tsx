import React from 'react';
import { Route, Switch } from 'react-router';
import { Main, Cabinet, Detail, Login, Map, Offer, Password, Register, Request, Forgot } from './routes';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/cabinet" component={Cabinet} />
      <Route path="/cabinet/password" component={Password} />
      <Route path="/detail" component={Detail} />
      <Route exact path="/login" component={Login} />
      <Route path="/login/forgot" component={Forgot} />
      <Route path="/register" component={Register} />
      <Route path="/map" component={Map} />
      <Route path="/offer" component={Offer} />
      <Route path="/request" component={Request} />
    </Switch>
  );
};

export default MainRoutes;
