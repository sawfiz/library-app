import React from 'react';
import Books from './components/Books';
import AddBook from './components/AddBook';
import './App.css';
import BooksHeader from './components/BooksHeader';
import BookListContextProvider from './contexts/BookListContext';

export default function App() {
  return (
    <div className='app'>
      <h1>My Reading List</h1>
      <BookListContextProvider>
        <AddBook />
        <div>
          <BooksHeader />
          <Books />
        </div>
      </BookListContextProvider>
    </div>
  );
}
