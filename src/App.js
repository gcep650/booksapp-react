import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './BookList';
import Navbar from './Navbar';
import DataSource from './DataSource';
import './App.css';
import History from './History';
import Book from './Book';

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

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={
                        <BookList bookList={this.state.bookList} handleShowBook={this.showOneBook} />
                    } />
                    <Route exact path='/show/:bookId' element={<Book book={this.state.bookList[this.state.selectedId]} />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;