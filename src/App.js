import React from 'react';
import Books from './components/Books';
import AddBook from './components/AddBook';
import './App.css';
import BooksHeader from './components/BooksHeader';
import BookListContextProvider from './contexts/BookListContext';

export default function App() {
  return (
    <div>
      <h1>Library</h1>
      <BookListContextProvider>
        <AddBook />
        <div className="books-container">
          <BooksHeader />
          <Books />
        </div>
      </BookListContextProvider>
    </div>
  );
}
