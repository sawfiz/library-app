import { useContext, useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { BookListContext } from '../contexts/BookListContext';

export default function Book({ book, editBook }) {
  console.log('🚀 ~ file: Book.js:7 ~ Book ~ book:', book);
  const { getBooks } = useContext(BookListContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const changeReadStatus = async (id, isRead) => {
    const bookDoc = doc(db, 'books', id);
    await updateDoc(bookDoc, { isRead: !isRead });
    getBooks();
  };

  const deleteBook = async (id) => {
    const bookDoc = doc(db, 'books', id);
    await deleteDoc(bookDoc);
    getBooks();
  };

  return (
    <div
      className="book"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <a href={book.url} target="_blank" rel="noopener noreferrer">
          {book.title}
        </a>
      </div>
      <div>{book.author}</div>
      <div>{book.year}</div>
      <div onClick={() => changeReadStatus(book.id, book.isRead)}>
        {book.status}
      </div>
      {isHovered && (
        <div className="buttons">
          <button className="edit-button" onClick={() => editBook(book)}>
            ✍️
          </button>
          <button className="delete-button" onClick={() => deleteBook(book.id)}>
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}
