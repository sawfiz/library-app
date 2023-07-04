import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import Book from './Book';
import EditBookModal from './EditBookModal';

export default function Books({ getBooks, bookList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  // Set booToEdit when a book's edit button is clicked
  const editBook = (book) => {
    setBookToEdit(book);
    openModal();
  };

  // Function to handle changes in the EditBookModal
  const handleChange = (e) => {
    setBookToEdit({ ...bookToEdit, [e.target.name]: e.target.value });
  };

  // Function to handle submitting the EditBookModal
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const bookDoc = doc(db, 'books', bookToEdit.id);
      const bookData = { ...bookToEdit };
      await updateDoc(bookDoc, bookData);
      closeModal(); // Close the modal after successfully adding the book
    } catch (error) {
      console.error('Error editing book:', error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    getBooks();
  };

  return (
    <div>
      {bookList.map((book) => {
        return (
          <Book
            key={book.id}
            book={book}
            getBooks={getBooks}
            editBook={editBook}
          />
        );
      })}
      {/* Use conditional rendering to only render the EditBookModal component within Books 
      when the isOpen condition is satisfied */}
      {isModalOpen && (
        <EditBookModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          bookToEdit={bookToEdit}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
