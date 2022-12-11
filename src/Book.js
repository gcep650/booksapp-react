import React from 'react';

class Book extends React.Component {

    render() {
        var date = new Date(this.props.book.publish_date);
        return (
            <div className='container'>
                <div className="card" style={{width: '18rem'}}>
                    <h5 className="card-title">{this.props.book.title}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Author: {this.props.book.author}</li>
                        <li className="list-group-item">Genre: {this.props.book.genre}</li>
                        <li className="list-group-item">Page count: {this.props.book.page_count}</li>
                        <li className="list-group-item">Publish date: {date.toDateString('dd/MM/yyyy')}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Book;