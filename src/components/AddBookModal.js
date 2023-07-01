import React, { useState } from 'react';
import Modal from 'react-modal';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../config/firebase';

Modal.setAppElement('#root'); // Set the root element for the modal

export default function AddBookModal({ isOpen, closeModal, getBooks }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [isRead, setIsRead] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookData = { title, author, pages, isRead };
      await addDoc(collection(db, 'books'), bookData);
      closeModal(); // Close the modal after successfully adding the book
      getBooks();
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          Pages:
          <input
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
        </label>
        <label>
          Read:
          <input
            type="checkbox"
            checked={isRead}
            onChange={(e) => setIsRead(e.target.checked)}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </Modal>
  );
}
