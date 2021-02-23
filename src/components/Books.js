import React, {useState, useEffect} from 'react';
import api from '../services/Api';

function BooksList() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks(){
      const response = await api.get('/books');
      console.log(response.data);
      setBooks(response.data);
    }
    loadBooks();
  },[]);

  return (
    <div className="App">
      <div>{books}</div>
    </div>
  );
}

export default BooksList;