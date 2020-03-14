import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from 'src/store';
import MainRoutes from 'src/routes';

const { store } = configureStore({});

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MainRoutes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
