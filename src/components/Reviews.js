import React from 'react';

function Reviews(book) {
    let name = book.location.pathname.split(":");
    console.log(name[1]);

    return (
        <>
            <h1>Review of the book: {name[1]} </h1>
        </>
    );
}

export default Reviews;