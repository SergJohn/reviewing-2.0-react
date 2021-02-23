import './App.css';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          REVIEWING
        </p>
        <a
          className="App-link"
          href="/books"
        >
          Books
        </a>
      </header>
      <Books />
    </div>
  );
}

export default App;
