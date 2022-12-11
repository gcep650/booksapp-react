import React from 'react';
import FormInput from './FormInput';
import './Form.css';
import DataSource from './DataSource';

class EditBook extends React.Component {

    state = {
        book_id: this.props.book.book_id,
        title: this.props.book.title,
        author: this.props.book.author,
        genre: this.props.book.genre,
        page_count: this.props.book.page_count,
        publish_date: this.props.book.publish_date,
        response: null
    }

    updateTitle = (title) => {
        this.setState({title: title});
    }

    updateAuthor = (author) => {
        this.setState({author: author});
    }

    updateGenre = (genre) => {
        this.setState({genre: genre});
    }

    updatePageCount = (page_count) => {
        this.setState({page_count: page_count});
    }

    updatePublishDate = (publish_date) => {
        this.setState({publish_date: publish_date});
    }

    handleSubmit = (event) => {
        this.setState({response: null});
        event.preventDefault();
        console.log('submitting: ', this.state);
        this.editBook(this.state);
    }

    editBook = async (book) => {
        DataSource.put('/books/' + this.state.book_id, book)
        .then(result => {
            this.setState({response: result.data})
        }).catch((e) => {
            this.setState({response: e.response.data})
        });
    }

    render() {
        var msg;
        if (this.state.response != null) {
            if (this.state.response.error != null) {
                msg = <p className="error">{this.state.response.error}</p>;
            }
            else if (this.state.response.success != null) {
                msg = <p className='success'>{this.state.response.success}</p>;
            }
        }
        var date = new Date(this.state.publish_date);
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Update an existing Book</h1>
                    <FormInput onChange={this.updateTitle} value={this.state.title} id="title" title="Book Title" type="text" />
                    <FormInput onChange={this.updateAuthor} value={this.state.author} id="author" title="Author" type="text" />
                    <FormInput onChange={this.updateGenre} value={this.state.genre} id="genre" title="Genre" type="text" />
                    <FormInput onChange={this.updatePageCount} value={this.state.page_count} id="page_count" title="Page Count" type="number" />
                    <FormInput onChange={this.updatePublishDate} value={date.toLocaleDateString('en-CA')} id="publish_date" title="Publication Date" type="date" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {msg}
                </form>
            </div>
        )
    }
}

export default EditBook;