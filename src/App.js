import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BookList from './BookList';
import Navbar from './Navbar';
import DataSource from './DataSource';
import './App.css';

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

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={
                        <BookList bookList={this.state.bookList} />
                    } />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;