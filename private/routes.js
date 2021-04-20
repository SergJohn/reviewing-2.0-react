const express = require('express'),
router = express.Router();

var reviewCtrl = require('./review-controller');
var bookCtrl = require('./book-controller');

// GET
router.get('/books', bookCtrl.getBooks);

router.get('/books/:book', bookCtrl.getBook);

router.get('/', (req, res) =>{
    res.send('<h1>test</h1>');
})

// POST
router.post('/add-book', bookCtrl.createBook);

router.post('/add-review', reviewCtrl.createReview);

// PUT

// DELETE
router.delete('/delete-book/:title', bookCtrl.deleteBook);


module.exports = router;