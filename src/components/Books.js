import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import FormAddBook from './FormAddBook';
import Nav from './Nav';
import FormAddReview from './FormAddReview';
import Button from '@material-ui/core/Button';
import deleteBook from '../functions/DeleteBook';

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
          <Button href={`/reviews/:${book.title}`} variant="contained" color="primary">
            reviews
          </Button>
          <br />
          <br />
          <Button onClick={() => { deleteBook(book.title) }} variant="contained" color="primary">
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