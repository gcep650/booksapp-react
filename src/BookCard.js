import React from 'react';

class BookCard extends React.Component {
    render() {
        return (
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.book.author}</h6>
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-secondary">Edit</a>
                </div>
            </div>
        )
    }
}

export default BookCard;