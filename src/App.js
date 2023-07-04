import React, { useState, useEffect } from 'react';
import { db } from './config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Books from './components/Books';
import AddBook from './components/AddBook';
import './App.css';

export default function App() {
  const [bookList, setBookList] = useState([]);

  const [titleSortDir, setTitleSortDir] = useState(true);
  const [authorSortDir, setAuthorSortDir] = useState(true);
  const [pagesSortDir, setPagesSortDir] = useState(true);
  const [readSortDir, setReadSortDir] = useState(true);

  const booksCol = collection(db, 'books');

  const sortString = (array, key, dir) => {
    array.sort((a, b) => {
      const compareResult = a[key].localeCompare(b[key]);
      return dir ? compareResult : -compareResult;
    });
  };
  
  const sortNumber = (array, key, dir) => {
    array.sort((a, b) => (dir ? a[key] - b[key] : b[key] - a[key]));
  };

  const sortBoolean = (array, key, dir) => {
    array.sort((a, b) => {
      const compareResult = a[key] === b[key] ? 0 : a[key] ? -1 : 1;
      return dir ? compareResult : -compareResult;
    });
  };

  const getBooks = async (key = 'title', aToZ = true) => {
    try {
      const data = await getDocs(booksCol);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      switch (key) {
        case 'title':
          setTitleSortDir(!titleSortDir);
          sortString(filteredData, key, titleSortDir)
          break;
        case 'author':
          setAuthorSortDir(!authorSortDir);
          sortString(filteredData, key, authorSortDir)
          break;
        case 'pages':
          setPagesSortDir(!pagesSortDir);
          sortNumber(filteredData, key, pagesSortDir)
          break;
        case 'isRead':
          setReadSortDir(!readSortDir);
          sortBoolean(filteredData, key, readSortDir)
          break;

        default:
          // Sort the filteredData array alphabetically based on book title
          sortString(filteredData, key, true);
          break;
      }
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
          <div>
            Title <button onClick={() => getBooks('title')}>↕️</button>
          </div>
          <div>
            Author <button onClick={() => getBooks('author')}>↕️</button>
          </div>
          <div>
            Pages <button onClick={() => getBooks('pages')}>↕️</button>
          </div>
          <div>
            Read <button onClick={() => getBooks('isRead')}>↕️</button>
          </div>
        </div>
        <Books getBooks={getBooks} bookList={bookList} />
      </div>
    </div>
  );
}
