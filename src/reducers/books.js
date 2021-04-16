const defaultBooks = [{id: Math.random() },
    {},
    {}]

function booksReducer (state = [], action) {
    const getBookIndex = (book, state) => {
        for(let i = 0; i < state.length; i+=1 ){
            if(state[i].id === book.id){
                return i;
            }
        }
    };

    const {type, book} = action;
        let stateCopy = state.slice();
    switch(type){
        case 'CREATE_BOOK':
            stateCopy.push(book);
        break;
        case 'REMOVE_BOOK':
            const bookIndex = getBookIndex(book, state);
            stateCopy.splice(bookIndex, 1);
        break;
        default:
        break
    }

    return stateCopy;
}

export default booksReducer;