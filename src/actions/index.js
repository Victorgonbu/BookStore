const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

function createBook (book) {
    return { type: CREATE_BOOK, payload: book };
}

function RemoveBook(book) {
    return { type: REMOVE_BOOK, payload: book };
}

export { createBook, RemoveBook};