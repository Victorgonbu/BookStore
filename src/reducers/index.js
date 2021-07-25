import { createStore, combineReducers } from 'redux';
import bookReducer from './books';

const rootReducer = combineReducers({
  books: bookReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
