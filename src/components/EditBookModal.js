import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for the modal

export default function EditBookModal({
  isOpen,
  closeModal,
  bookToEdit,
  handleChange,
  handleSubmit,
}) {
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
                name="title"
                type="text"
                value={bookToEdit.title}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="author">
              Author:
              <input
                name="author"
                type="text"
                value={bookToEdit.author}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="pages">
              Pages:
              <input
                name="pages"
                type="number"
                value={bookToEdit.pages}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="isRead">
              Read:
              <input
                name="isRead"
                type="checkbox"
                checked={bookToEdit.isRead}
                onChange={handleChange}
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
