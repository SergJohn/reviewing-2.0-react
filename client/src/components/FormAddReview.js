import React, { useState } from 'react';
import api from '../services/Api';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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
                "title": bookTitle.toString().trim().toLowerCase(),
                "name": reviewerName.toString().trim().toLowerCase(),
                "review": reviewText.toString().trim().toLowerCase()
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
        <React.Fragment>
            <form className="inputs" onSubmit={handleSubmit}>
                <h3>Add a review</h3>
                <Input
                    placeholder="Which Book"
                    type="text"
                    name="title"
                    value={bookTitle}
                    onChange={handleChangeBookTitle}
                />
                <Input
                    placeholder="Your name"
                    type="text"
                    name="name"
                    value={reviewerName}
                    onChange={handleChangeReviewerName}
                />
                <Input
                    placeholder="Tell us"
                    type="text"
                    name="review"
                    value={reviewText}
                    onChange={handleChangeReviewText}
                />
                <Button type="submit" variant="contained" color="secundary">
                    Add Review
                </Button>
            </form>
        </React.Fragment>
    );
}

export default FormAddReview;
