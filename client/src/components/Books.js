import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import FormAddBook from './FormAddBook';
import Nav from './Nav';
import Footer from './Footer';
import FormAddReview from './FormAddReview';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
    <>
      <div className="App">
        <Nav />
        <Grid container spacing={1}>
          <Grid container item xl={12}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h1 className="title-books-comp">REVIEWING BOOKS</h1>
          </Grid>

          <Grid container item xl={3} xs={3}
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <div className="addBookForm">
              <FormAddBook />
              <br />
              <FormAddReview />
            </div>
          </Grid>
          <Grid container item xl={6} xs={9}
            direction="column"
            justify="center"
            alignItems="center"
          >

            <div className="books-list">
              {listBooks}
            </div>
          </Grid>
        </Grid>

        <Footer />

      </div>
    </>
  );
}

export default BooksList;