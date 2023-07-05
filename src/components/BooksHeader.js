import React, { useContext } from 'react';
import { BookListContext } from '../contexts/BookListContext';

export default function BooksHeader() {
  const { bookList, getBooks } = useContext(BookListContext);
  const toggleSort = true;
  return (
    <div className="books-header">
      <div>
        Title <button onClick={() => getBooks('title', toggleSort)}>↕️</button>
      </div>
      <div>
        Author <button onClick={() => getBooks('author', toggleSort)}>↕️</button>
      </div>
      <div>
        Pages <button onClick={() => getBooks('pages', toggleSort)}>↕️</button>
      </div>
      <div>
        Read <button onClick={() => getBooks('isRead', toggleSort)}>↕️</button>
      </div>
    </div>
  );
}
