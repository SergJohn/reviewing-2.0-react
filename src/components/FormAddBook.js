import React, { useState } from 'react';
import api from '../services/Api';

function FormAddBook() {

    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [books, setBooks] = useState([]);

    const handleChange = e => {
        setTitle(e.target.value);

    }

    const handleAuthorChange = e => {
        setAuthor(e.target.value);
    }

    const addedBook = [{
        "title": title,
        "author": author
    }];

    // setBooks(addedBook);
    // addedBook.push(books);

    const handleSubmit = e => {
        e.preventDefault();

        async function uploadBook() {
            const response = await api.post('/add-book');
            console.log(response.data);
            setBooks(response.data);
        }
        uploadBook();

        setTitle('');
        setAuthor('');
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="title"
                    value={title}
                    name="text"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="author"
                    value={author}
                    name="text"
                    onChange={handleAuthorChange}
                />
                <button>Add Book</button>
            </form>
        </>
    );
}

export default FormAddBook;