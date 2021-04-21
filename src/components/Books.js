import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import FormAddBook from './FormAddBook';
import Nav from './Nav';
import FormAddReview from './FormAddReview';
import Button from '@material-ui/core/Button';

function BooksList() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');
      setBooks(response.data);
    }
    loadBooks();

  });

  async function removeBook(title) {
    const res = await api.delete(`/delete-book/${title}`);
    console.log(res);
  }

  const listBooks = (
    <ul>
      {books.map((book) =>
        <div className="book-card" key={book.title}>
          <h2>
            {book.title.toUpperCase()}
          </h2>
          <p>
            {book.author}
          </p>
          <Button href={`/reviews/:${book.title}`} variant="contained" color="primary">
            reviews
          </Button>
          <br />
          <br />
          <Button onClick={() => { removeBook(book.title) }} variant="contained" color="primary">
            delete
          </Button>
        </div>
      )}
    </ul>
  );

  return (
    <div className="App">
      <Nav />
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