import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './BookList';
import Navbar from './Navbar';
import DataSource from './DataSource';
import './App.css';
import History from './History';
import Book from './Book';
import CreateBook from './CreateBook';
import EditBook from './EditBook';

class App extends React.Component {

    state = {
        bookList: [],
        selectedId: 0
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = async () => {
        const response = await DataSource.get('/books');
        this.setState({bookList: response.data });
    }

    showOneBook = (book_id) => {
        var index = 0;
        for (let i = 0; i < this.state.bookList.length; i++) {
            const element = this.state.bookList[i];
            if (element.book_id === book_id) {
                index = i;
            }
        }
        this.setState({selectedId: index}, History.push('/show/' + index),console.log('state', this.state));
    }

    deleteOneBook = async (book_id) => {
        await DataSource.delete('/books/' + book_id);
        this.loadBooks();
    }

    editOneBook = async (book_id) => {
        var index = 0;
        for (let i = 0; i < this.state.bookList.length; i++) {
            const element = this.state.bookList[i];
            if (element.book_id === book_id) {
                index = i;
            }
        }
        this.setState({selectedId: index}, History.push('/edit/' + index),console.log('state', this.state));
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={
                        <BookList bookList={this.state.bookList} handleShowBook={this.showOneBook} handleDeleteBook={this.deleteOneBook} handleEditBook={this.editOneBook} />
                    } />
                    <Route exact path='/show/:bookId' element={<Book book={this.state.bookList[this.state.selectedId]} />} />
                    <Route exact path='/add' element={<CreateBook />} />
                    <Route exact path='/edit/:bookId' element={<EditBook book={this.state.bookList[this.state.selectedId]} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;