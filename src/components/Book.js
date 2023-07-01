export default function Book({ book }) {
  console.log(book);
  return (
    <div className="book">
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        <div className="pages">{book.pages}</div>
        <div className="isRead">{book.isRead ? "✅" : "❌"}</div>
    </div>
  )
}
