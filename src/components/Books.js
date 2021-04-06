import React, {useState, useEffect} from 'react';
import api from '../services/Api';
import FormAddBook from './FormAddBook';
import HomePage from './Homepage';

function BooksList() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks(){
      const response = await api.get('/books');
      console.log(response.data);
      setBooks(response.data);
    }
    loadBooks();
  },[books]);

  return (
    <div className="App">
      <HomePage />
      <FormAddBook />
      <h1>{books.title}</h1>
      <p>{books.author}</p>
    </div>
  );
}

export default BooksList;