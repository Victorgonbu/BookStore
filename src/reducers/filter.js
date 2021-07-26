function filterReducer(state = 'All', action) {
    const {type, payload} = action;
    let stateCopy = state.slice();
    switch (type) {
        case 'CHANGE_FILTER':
            stateCopy = payload;
        default:
            break;
    }

    return stateCopy;
};

export default filterReducer;