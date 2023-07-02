import { useState } from 'react';
import Book from './Book';
import EditBookModal from './EditBookModal';

export default function Books({ getBooks, bookList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const passBookToEdit = (book) => {
    setBookToEdit(book);
    openModal();
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
            passBookToEdit={passBookToEdit}
          />
        );
      })}
      {/* Use conditional rendering to only render the EditBookModal component within Books 
      when the isOpen condition is satisfied rather than handling it within the modal component. 
      That way the prop value for the book to edit that is passed to the modal isn’t stale 
      when it is rendered  */}
      {isModalOpen && (
        <EditBookModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          bookToEdit={bookToEdit}
        />
      )}
    </div>
  );
}

// Handle multiple inputs with a single handle
// const [foo, setFoo] = useState( { propOne: "", propTwo: "" } )

// const handleChange = (e) => {
//   setFoo({...foo, [e.target.name]: e.target.value})
// }

// <input name="propOne" onChange={handleChange} value={foo.propOne}/>
// <input name="propTwo" onChange={handleChange} value={foo.propTwo}/>
