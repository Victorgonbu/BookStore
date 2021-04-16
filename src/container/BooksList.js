import React from 'react';
import { Connect } from 'react'

function BookList () {
    return(<table>
    <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
    </tr>
    </table>);
}

const mapStateToProps = (state) => {
    return { books: state}
}

export default Connect(mapStateToProps)(BookList);