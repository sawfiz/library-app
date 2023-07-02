import React, { useState, useEffect } from 'react';
import { db } from './config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Books from './components/Books';
import AddBook from './components/AddBook';
import './App.css';

export default function App() {
  const [bookList, setBookList] = useState([]);

  const booksCol = collection(db, 'books');

  const getBooks = async () => {
    try {
      const data = await getDocs(booksCol);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Sort the filteredData array alphabetically based on book title
      filteredData.sort((a, b) => a.title.localeCompare(b.title));

      // console.log(filteredData);
      setBookList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h1>Library</h1>
      <AddBook getBooks={getBooks} />
      <div className="books-container">
        <div className="books-header">
          <div>Title</div>
          <div>Author</div>
          <div>Pages</div>
          <div>isRead</div>
        </div>
        <Books getBooks={getBooks} bookList={bookList} />
      </div>
    </div>
  );
}
