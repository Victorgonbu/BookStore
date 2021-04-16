const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

function createBook () {
    return { type: CREATE_BOOK };
}

function RemoveBook() {
    return { type: REMOVE_BOOK };
}

export { createBook, RemoveBook};