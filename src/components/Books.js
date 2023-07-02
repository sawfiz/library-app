import { useState } from 'react';
import Book from './Book';
import EditBookModal from './EditBookModal'

export default function Books( {getBooks, bookList}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null)

  const passBookToEdit = (book) => {
    setBookToEdit(book)
    openModal();
  }

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
        return <Book key={book.id} book={book} getBooks={getBooks} passBookToEdit={passBookToEdit} />;
      })}
       <EditBookModal isOpen={isModalOpen} closeModal={closeModal} bookToEdit={bookToEdit}/>
    </div>
  );
}
