import { createStore, combineReducers } from 'redux';
import AppReducer from './reducers/reducer';

const rootReducer = combineReducers({
  AppReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;