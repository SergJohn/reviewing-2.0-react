const express = require('express'),
router = express.Router();

let books = [];
let reviews = [];

// GET
router.get('/books', (req, res) =>{
    console.log('inside end-point /books');
    const bookSample = [{
        "title":"The Outsider",
        "author": "Albert Camus"
    },{
        "title":"The libertine",
        "author": "John wilmot"
    },{
        "title":"Coffee Design",
        "author": "Monika Rosa"
    }];
    res.send(bookSample);
})

router.get('/', (req, res) =>{
    res.send('<h1>test</h1>');
})

// POST
router.post('/add-book', (req, res) => {
    const book = {
        "title": req.body.title,
        "author": req.body.author,
    };

    books.push(book);

    console.log('inside add-books end-point');
    console.log('You have posted');
    console.log(book);
    console.log(books);
    res.send(books);
});

router.post('/add-review', (req, res) => {
    const review = {
        "bookTitle": req.body.bookTitle,
        "reviewerName": req.body.reviewerName,
        "reviewText": req.body.reviewText
    };

    reviews.push(review);

    console.log('inside add-review end-point');
    console.log('You have posted a new review');
    console.log(review);
    console.log(reviews);
    res.send(reviews);
});

// PUT

// DELETE

module.exports = router;