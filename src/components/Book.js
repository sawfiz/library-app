import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Book({ book, getBooks }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const deleteBook = async (id) => {
    const bookDoc = doc(db, "books", id)
    await deleteDoc(bookDoc)
    getBooks()
  }

  return (
    <div
      className="book"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
      <div className="pages">{book.pages}</div>
      <div className="isRead">{book.isRead ? '✅' : '❌'}</div>
      {isHovered && (
        <div className="buttons">
          <button className="edit-button">✍️</button>
          <button className="delete-button" onClick={()=>deleteBook(book.id)}>🗑️</button>
        </div>
      )}
    </div>
  );
}
