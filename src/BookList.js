import React from 'react';
import BookCard from './BookCard';

class BookList extends React.Component {
    render() {
        const books = this.props.bookList.map((book) => {
            return (
                <BookCard book={book} />
            );
        });

        return (
            <div className='container'>
                {books}
            </div>
        );
    }
}

export default BookList;