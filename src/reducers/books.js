function booksReducer(state = [{
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
}], action) {
  const getBookIndex = (book, state) => {
    for (let i = 0; i < state.length; i += 1) { if (state[i].id === book.id) return i; }
    return null;
  };

  const { type, payload } = action;
  const stateCopy = state.slice();
  let bookIndex;
  let newBook;
  switch (type) {
    case 'CREATE_BOOK':
      newBook = { ...payload, id: stateCopy.length + 1 };
      stateCopy.push(newBook);
      break;
    case 'REMOVE_BOOK':
      bookIndex = getBookIndex(payload, state);
      stateCopy.splice(bookIndex, 1);
      break;
    default:
      break;
  }

  return stateCopy;
}

export default booksReducer;
