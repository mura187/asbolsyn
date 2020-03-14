import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
// import fetchMiddleware from '../middleware/fetchMiddleware';

// #constants
const isProd = process.env.NODE_ENV === 'production';
export const history = createHistory();

// #createStore : enhancer

// #logger middleware (dev only)
const middlewares = [
  routerMiddleware(history),
  thunkMiddleware,
  createLogger({
    predicate: () => !isProd,
    level: 'info',
    collapsed: true,
  }),
];
const enhancers = [applyMiddleware(...middlewares)];

// # persisted reducer
const persistConfig = {
  storage,
  key: 'root',
  blacklist: ['router'],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer(history),
);

export default function configureStore(initialState = {}) {
  const store = createStore(persistedReducer, initialState, ...enhancers);
  const persistor = persistStore(store);
  return { store, persistor };
}
