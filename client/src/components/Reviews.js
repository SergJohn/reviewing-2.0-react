import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/Api';
import Nav from './Nav';
import Button from '@material-ui/core/Button';

function Reviews(book) {
    let name = book.location.pathname.split(":");
    let nameTitle = name[1];

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function loadReviews() {
            const response = await api.get(`/reviews`);
            setReviews(response.data);
        }
        loadReviews();

    });

    async function removeReview(review) {
        const res = await api.delete(`/delete-review/${review}`);
        console.log(res);
    }

    const listReviews = (
        <ul>
            {reviews.map((review) => review.title == nameTitle ?
                <div className="book-card" key={review.review}>
                    <p>
                        {review.title}
                    </p>
                    <h2>
                        <strong>
                            {review.name}
                        </strong>
                    </h2>
                    <p className="citation">
                        <cite>
                            " {review.review} "
                        </cite>
                    </p>
                    <Button onClick={() => { removeReview(review.review) }} variant="contained" color="primary">
                        delete
                    </Button>
                </div> : null
            )}
        </ul>
    );

    return (
        <React.Fragment>
            <Nav />
            <h1>Reviews of the book: {nameTitle} </h1>
            <Button variant="contained" color="primary">
                <Link to="/books" className="App-link">

                    Back to books
                </Link>
            </Button>

            <div className="books-list">
                <div>{listReviews}</div>
            </div>

        </React.Fragment>
    );
}

export default Reviews;