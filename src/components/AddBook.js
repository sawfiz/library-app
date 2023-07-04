import React, { useState } from 'react';
import AddBookModal from './AddBookModal';


export default function AddBook({getBooks}) {
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
      {isModalOpen && <AddBookModal isOpen={isModalOpen} closeModal={closeModal}/>}
      </div>
  )
}
