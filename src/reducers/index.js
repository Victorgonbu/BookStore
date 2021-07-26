import { createStore, combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
