import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import FormAddBook from './FormAddBook';
import HomePage from './Homepage';
import FormAddReview from './FormAddReview';

function BooksList() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');
      console.log(response.data);
      setBooks(response.data);
    }
    loadBooks();

  }, [books.title]);

  const handleSubmit = e => { }

  const listBooks = (
    <ul>
      {books.map((book) =>
        <div className="book-card" key={book.title}>
          <h2>
            {book.title}
          </h2>
          <p>
            {book.author}
          </p>
          <button>reviews</button>
          <br/>
          <br/>
          <button>delete</button>
        </div>
      )}
    </ul>
  );

  return (
    <div className="App">
      <HomePage />
      <div className="addBookForm">
        <FormAddBook />
      </div>
      <div className="addReviewForm">
        <FormAddReview />
      </div>
      <h1 className="title-books-comp">Book's list</h1>
      <div className="books-list">
        <div>{listBooks}</div>
      </div>

    </div>
  );
}

export default BooksList;