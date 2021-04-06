import React, { useState, useEffect } from 'react';
import api from '../services/Api';

function FormAddBook() {

    const [title, setTitle] = useState([]);
    const [author, setAuthor] = useState([]);
    const [books, setBooks] = useState([]);


    useEffect(() => {
        async function loadBooks() {
            const response = await api.get('/books');
            console.log(response.data);
            setBooks(response.data);
        }
        loadBooks();
    }, [books]);

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

    addedBook.push(books);

    async function uploadBook() {
        const response = await api.post('/add-book');
        console.log(response.data);
        setBooks(response.data);
    }
    uploadBook();

    const handleSubmit = e => {
        e.preventDefault();

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