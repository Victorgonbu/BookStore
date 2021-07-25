import React from 'react';
import BooksForm from '../container/BooksForm';
import BooksList from '../container/BooksList';

function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
