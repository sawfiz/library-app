import React, { useContext, useState } from 'react';
import AddBookModal from './AddBookModal';
import { BookListContext } from '../contexts/BookListContext';


export default function AddBook() {
  const {getBooks} = useContext(BookListContext)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    getBooks();
  };
  
  return (
    <div>
      <button onClick={openModal}>Add</button>
      {/* Conditional rendering of the AddBookModal */}
      {isModalOpen && <AddBookModal isOpen={isModalOpen} closeModal={closeModal}/>}
      </div>
  )
}
