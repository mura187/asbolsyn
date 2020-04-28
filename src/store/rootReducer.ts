import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import authReducer from 'src/store/auth/reducer';
import itemReducer from 'src/store/item/reducer';
import dealReducer from 'src/store/deal/reducer';

const rootReducer = (history: History) => combineReducers({
  authReducer,
  itemReducer,
  dealReducer,
  router: connectRouter(history),
});

export default rootReducer;
