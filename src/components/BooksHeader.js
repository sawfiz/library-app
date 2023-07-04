import React from 'react';

export default function BooksHeader({getBooks}) {
  return (
      <div className="books-header">
        <div>
          Title <button onClick={() => getBooks('title')}>↕️</button>
        </div>
        <div>
          Author <button onClick={() => getBooks('author')}>↕️</button>
        </div>
        <div>
          Pages <button onClick={() => getBooks('pages')}>↕️</button>
        </div>
        <div>
          Read <button onClick={() => getBooks('isRead')}>↕️</button>
        </div>
      </div>
  );
}
