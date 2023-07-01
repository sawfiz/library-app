// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import Book from './Book';

export default function Books() {
  const [bookList, setBookList] = useState([]);

  const booksCol = collection(db, 'books');

  const getBooks = async () => {
    try {
      const data = await getDocs(booksCol);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBookList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, [bookList]);

  return (
    <div>
      {bookList.map((book) => {
        return <Book key={book.id} book={book} getBooks={getBooks}/>;
      })}
    </div>
  );
}
