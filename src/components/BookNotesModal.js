import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for the modal

export default function BookNotesModal({
  isOpen,
  closeModal,
  bookToEdit,
  handleChange,
  handleSubmit,
}) {
  return (
    <Modal
      className="book-notes-modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <h2>Book Notes</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lead">
            What led me to this book
            <textarea
              name="lead"
              value={bookToEdit.lead}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div>
          <label htmlFor="startDate">
            Start
            <input
              name="startDate"
              type="date"
              value={bookToEdit.startDate}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="finishDate">
            Finish
            <input
              name="finishDate"
              type="date"
              value={bookToEdit.finishDate}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div>
          <label htmlFor="notes">
            What led me to this book
            <textarea
              name="notes"
              value={bookToEdit.notes}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <div className="submit-button-container">
          <button className="submit-button" type="submit">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
}
