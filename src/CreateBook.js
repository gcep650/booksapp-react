import React from 'react';
import FormInput from './FormInput';
import './Form.css';
import DataSource from './DataSource';

class CreateBook extends React.Component {

    state = {
        title: '',
        author: '',
        genre: '',
        page_count: 0,
        publish_date: '',
        response: null
    }

    updateTitle = (title) => {
        this.setState({title: title}, () => {
            console.log(this.state.title);
        });
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
        this.saveBook(this.state);
    }

    saveBook = async (book) => {
        DataSource.post('/books/', book)
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
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create a new Book</h1>
                    <FormInput onChange={this.updateTitle} id="title" title="Book Title" type="text" placeholder="Book Title" />
                    <FormInput onChange={this.updateAuthor} id="author" title="Author" type="text" placeholder="Author Name" />
                    <FormInput onChange={this.updateGenre} id="genre" title="Genre" type="text" placeholder="Genre" />
                    <FormInput onChange={this.updatePageCount} id="page_count" title="Page Count" type="number" placeholder="0" />
                    <FormInput onChange={this.updatePublishDate} id="publish_date" title="Publication Date" type="date" placeholder="" />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {msg}
                </form>
            </div>
        )
    }
}

export default CreateBook;