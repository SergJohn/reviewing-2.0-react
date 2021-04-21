import React, { useState, useEffect } from 'react';
import api from '../services/Api';

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
                "title": title,
                "author": author
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
        <>
            <form className="inputs" onSubmit={handleSubmit}>
            <h3>Add a new book</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="author"
                    placeholder="author"
                    value={author}
                    onChange={handleAuthorChange}
                />
                <button type="submit">Add Book</button>
            </form>
            
        </>
    );
}

export default FormAddBook;