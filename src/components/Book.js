import { useState } from "react";

export default function Book({ book }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
          <button className="delete-button">🗑️</button>
        </div>
      )}
    </div>
  );
}
