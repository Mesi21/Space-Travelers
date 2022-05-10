import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
