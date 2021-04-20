import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import Nav from './Nav';

function Reviews(book) {
    let name = book.location.pathname.split(":");
    console.log(name[1]);
    let nameTitle = name[1];

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function loadReviews() {
            const response = await api.get(`/reviews`);
            console.log(response.data);
            setReviews(response.data);
        }
        loadReviews();

    }, []);

    const listReviews = (
        <ul>
            {reviews.map((review) => review.title == nameTitle ? 
                <div className="book-card" key={review.name}>
                    <h2>
                        {review.title}
                    </h2>
                    <p>
                        {review.name}
                    </p>
                    <p>
                        {review.review}
                    </p>
                </div> : null
            )}
        </ul>
    );

    return (
        <>
            <Nav />
            <h1>Reviews of the book: {nameTitle} </h1>
            <div className="books-list">
                <div>{listReviews}</div>
            </div>
        </>
    );
}

export default Reviews;