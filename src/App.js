import Books from './components/Books';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Library</h1>
      <div className="books-container">
        <div className="books-header">
          <div>Title</div>
          <div>Author</div>
          <div>Pages</div>
          <div>isRead</div>
        </div>
        <Books />
      </div>
    </div>
  );
}
