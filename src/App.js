import React from 'react';
import Books from './components/Books';
import './App.css';
import Header from './components/Header';
import BooksHeader from './components/BooksHeader';
import BookListContextProvider from './contexts/BookListContext';

export default function App() {
  return (
    <div className="app">
      <BookListContextProvider>
        <Header></Header>
        <BooksHeader />
        <Books />
      </BookListContextProvider>
    </div>
  );
}
