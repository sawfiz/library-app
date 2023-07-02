import Book from './Book';

export default function Books( {getBooks, bookList}) {


  return (
    <div>
      {bookList.map((book) => {
        return <Book key={book.id} book={book} getBooks={getBooks}/>;
      })}
    </div>
  );
}
