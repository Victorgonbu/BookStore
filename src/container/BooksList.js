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
    return { bookObject: state}
}

export default Connect(mapStateToProps)(BookList);