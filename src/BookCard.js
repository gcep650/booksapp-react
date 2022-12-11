import React from 'react';

class BookCard extends React.Component {

    showBook = (event) => {
        console.log('book id=', this.props.book.book_id);
        this.props.showBook(this.props.book.book_id);
    }

    deleteBook = (event) => {
        console.log('deleting book id=', this.props.book.book_id);
        this.props.deleteBook(this.props.book.book_id);
    }

    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.book.author}</h6>
                    <a href="#" onClick={this.showBook} className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-secondary">Edit</a>
                    <a href="#" onClick={this.deleteBook} className="btn btn-danger">Delete</a>
                </div>
            </div>
        )
    }
}

export default BookCard;