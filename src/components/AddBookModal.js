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
    <Modal className="add-book-modal" isOpen={isOpen} onRequestClose={closeModal}>
      <h2>New Book</h2>
      <fieldset>
      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className='add-book-input'>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Author:
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Pages:
            <input
              type="number"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Read:
            <input
              type="checkbox"
              checked={isRead}
              onChange={(e) => setIsRead(e.target.checked)}
            />
          </label>
        </div>
        <button className="add-book-submit" type="submit">Add</button>
      </form>
      </fieldset>
    </Modal>
  );
}
