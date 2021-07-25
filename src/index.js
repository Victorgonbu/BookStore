import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';

import booksReducer from './reducers/books';

const initialState = [{
  id: 1,
  title: 'Who moved my cheese',
  category: 'Kids',
},
{
  id: 2,
  title: 'Benjamin Franklin',
  category: 'Biography',
},
{
  id: 3,
  title: 'Inferno',
  category: 'Drama',
}];

const store = createStore(booksReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
