import React, { useState, useEffect } from 'react';
import api from '../services/Api';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function FormAddBook() {

    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);

    const handleChange = e => {
        setTitle(e.target.value);

    }

    const handleAuthorChange = e => {
        setAuthor(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        async function uploadBook() {

            const addedBook = {
                "title": title.toString().trim(),
                "author": author.toString().trim()
            };

            const response = await api.post('/add-book', addedBook).then(() => console.log('Sending to backend')).catch(err => {
                console.log(err);
            });
        }
        uploadBook();

        setTitle('');
        setAuthor('');

    }

    return (
        <React.Fragment>
            <form className="inputs" onSubmit={handleSubmit}>
                <h3>Add a new book</h3>
                <Input
                    placeholder="title"
                    inputProps={{ 'aria-label': 'description' }}
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                />

                <Input
                    placeholder="author"
                    inputProps={{ 'aria-label': 'description' }}
                    type="text"
                    name="author"
                    value={author}
                    onChange={handleAuthorChange}
                />
                <Button type="submit" variant="contained" color="secundary">
                    Add Book
                </Button>
            </form>
        </React.Fragment>
    );
}

export default FormAddBook;