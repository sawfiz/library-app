import React, { useState } from 'react';
import AddBookModal from './AddBookModal';


export default function AddBook({getBooks}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <button onClick={openModal}>Add</button>
      <AddBookModal isOpen={isModalOpen} closeModal={closeModal} getBooks={getBooks}/>
      </div>
  )
}
