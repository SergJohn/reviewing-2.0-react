import React, { useState } from 'react';
import api from '../services/Api';

function FormAddReview() {

    const [bookTitle, setBookTitle] = useState([]);
    const [reviewerName, setReviewerName] = useState([]);
    const [reviewText, setReviewText] = useState([]);

    const handleChangeBookTitle = e => {
        setBookTitle(e.target.value);
    }

    const handleChangeReviewerName = e => {
        setReviewerName(e.target.value);
    }

    const handleChangeReviewText = e => {
        setReviewText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        async function uploadReview() {

            const addedReview = {
                "bookTitle": bookTitle,
                "reviewerName": reviewerName,
                "reviewText": reviewText
            };

            const response = await api.post('/add-review', addedReview).then(() => console.log('Sending to backend')).catch(err => {
                console.log(err);
            });
        }
        uploadReview();

        setBookTitle('');
        setReviewerName('');
        setReviewText('');

    }

    return (
        <>
            <form className="inputs"  onSubmit={handleSubmit}>
                <h3>Add a review</h3>
                <input
                    type="text"
                    name="bookTitle"
                    placeholder="Which Book"
                    value={bookTitle}
                    onChange={handleChangeBookTitle}
                />
                <input
                    type="text"
                    name="reviewerName"
                    placeholder="Your name"
                    value={reviewerName}
                    onChange={handleChangeReviewerName}
                />
                <input
                    type="text"
                    name="reviewText"
                    placeholder="what's your opinion"
                    value={reviewText}
                    onChange={handleChangeReviewText}
                />
                <button type="submit">Add Review</button>
            </form>
        </>
    );
}

export default FormAddReview;