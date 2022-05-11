import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './missions/missions';
import rocketsReducer from './rockets/rockets';

const rootReducer = combineReducers({
  rocketsReducer,
  missions,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);

export default store;
