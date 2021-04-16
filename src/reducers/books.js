const defaultBooks = [{id: Math.random() * (100 - 1) + 1,
        title: 'los mostros y el parsero',
        category: 'Kids'
    },
    {
        id: Math.random() * (100 - 1) + 1,
        title: 'kotopako & krillin',
        category: 'Action'},
    {
        id: Math.random() * (100 - 1) + 1,
        title: 'Choripan trayectory',
        category: 'History'
}];

function booksReducer (defaultBooks, action) {
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