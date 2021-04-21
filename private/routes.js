const express = require('express'),
router = express.Router();

var reviewCtrl = require('./review-controller');
var bookCtrl = require('./book-controller');

// GET
router.get('/books', bookCtrl.getBooks);

router.get('/books/:book', bookCtrl.getBook);

router.get('/reviews', reviewCtrl.getReviews);

router.get('/review/:title', reviewCtrl.getReview);

// POST
router.post('/add-book', bookCtrl.createBook);

router.post('/add-review', reviewCtrl.createReview);

// PUT
router.put('books/:title', bookCtrl.updateBook);

router.put('reviews/:title', reviewCtrl.updateReview);

// DELETE
router.delete('/delete-book/:title', bookCtrl.deleteBook);

router.delete('/delete-review/:review', reviewCtrl.deleteReview);

module.exports = router;