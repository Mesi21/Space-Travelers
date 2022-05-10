import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import missions from './missions/missions';

const rootReducer = combineReducers({missions});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;