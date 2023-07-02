import React, { useState } from 'react';
import Modal from 'react-modal';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

Modal.setAppElement('#root'); // Set the root element for the modal

export default function EditBookModal({ isOpen, closeModal, bookToEdit }) {
  const [title, setTitle] = useState(bookToEdit?.title);
  const [author, setAuthor] = useState(bookToEdit?.author);
  const [pages, setPages] = useState(bookToEdit?.pages);
  const [isRead, setIsRead] = useState(bookToEdit?.isRead);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookDoc = doc(db, 'books', bookToEdit.id);
      const bookData = { title, author, pages, isRead };
      await updateDoc(bookDoc, bookData);
      closeModal(); // Close the modal after successfully adding the book
    } catch (error) {
      console.error('Error editing book:', error);
    }
  };

  return (
    <Modal
      className="book-details-modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <h2>Edit Book</h2>
      <fieldset>
        <form className="book-details-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">
              Title:
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="author">
              Author:
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="pages">
              Pages:
              <input
                id="pages"
                type="number"
                value={pages}
                onChange={(e) => setPages(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label htmlFor="isRead">
              Read:
              <input
                id="isRead"
                type="checkbox"
                checked={isRead}
                onChange={(e) => setIsRead(e.target.checked)}
              />
            </label>
          </div>
          <button className="submit-button" type="submit">
            Update
          </button>
        </form>
      </fieldset>
    </Modal>
  );
}
