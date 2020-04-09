import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import authReducer from 'src/store/auth/reducer';
import itemReducer from 'src/store/item/reducer';

const rootReducer = (history: History) => combineReducers({
  authReducer,
  itemReducer,
  router: connectRouter(history),
});

export default rootReducer;
