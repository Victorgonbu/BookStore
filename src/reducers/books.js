function booksReducer(state = [{
  id: 1,
  title: 'Who moved my cheese',
  category: 'Kids',
  progress: 54,
},
{
  id: 2,
  title: 'Benjamin Franklin',
  category: 'Biography',
  progress: 26,
},
{
  id: 3,
  title: 'Inferno',
  category: 'Horror',
  progress: 87,
}], action) {
  const { type, payload } = action;
  const stateCopy = state.slice();
  let newBook;
  switch (type) {
    case 'CREATE_BOOK':
      newBook = { ...payload, id: stateCopy.length + 1 };
      stateCopy.push(newBook);
      break;
    case 'REMOVE_BOOK':
      stateCopy.splice(payload, 1);
      break;
    default:
      break;
  }

  return stateCopy;
}

export default booksReducer;
