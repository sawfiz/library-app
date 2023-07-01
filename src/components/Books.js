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

export default function Books( {getBooks, bookList}) {


  return (
    <div>
      {bookList.map((book) => {
        return <Book key={book.id} book={book} getBooks={getBooks}/>;
      })}
    </div>
  );
}
