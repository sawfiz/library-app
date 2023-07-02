import { useState } from 'react';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import EditBookModal from './EditBookModal'

export default function Book({ book, getBooks }) {
  const [isHovered, setIsHovered] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const changeReadStatus = async (id, isRead) => {
    const bookDoc = doc(db, 'books', id);
    await updateDoc(bookDoc, { isRead: !isRead });
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
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <div className="pages">{book.pages}</div>
      <div
        className="isRead"
        onClick={() => changeReadStatus(book.id, book.isRead)}
      >
        {book.isRead ? '✅' : '❌'}
      </div>
      {isHovered && (
        <div className="buttons">
          <button className="edit-button" onClick={openModal}>✍️</button>
          <button className="delete-button" onClick={() => deleteBook(book.id)}>
            🗑️
          </button>
        </div>
      )}
      <EditBookModal isOpen={isModalOpen} closeModal={closeModal} getBooks={getBooks} book={book}/>
    </div>
  );
}
