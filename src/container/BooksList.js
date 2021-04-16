import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

function BookList (props) {
    const { books } = props;

    return(<table>
    <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
    </tr>

    { books.map((book) => {
        return(<Book book={book} />);
    }) }

    </table>);
}

const mapStateToProps = (state) => {
    return { books: state}
}

export default connect(mapStateToProps)(BookList);;