import React from 'react';
import BookCard from './BookCard';

class BookList extends React.Component {

    handleShowBook = (book_id) => {
        this.props.handleShowBook(book_id);
    }

    handleDeleteBook = (book_id) => {
        this.props.handleDeleteBook(book_id);
    }

    render() {
        const books = this.props.bookList.map((book) => {
            return (
                <BookCard book={book} showBook={this.handleShowBook} deleteBook={this.handleDeleteBook} />
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