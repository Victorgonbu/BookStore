const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

function changeFilter() {
    
};

function createBook(book) {
  return { type: CREATE_BOOK, payload: book };
}

function removeBook(book) {
  return { type: REMOVE_BOOK, payload: book };
}

export { createBook, removeBook };
