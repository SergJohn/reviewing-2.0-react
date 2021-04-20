var Book = require('./models/bookModel');

exports.createBook = function (req, res) {
    var newbook = new Book(req.body);
    newbook.save(function (err, book) {
        if (err) {
            res.status(400).json(err);
        }

        res.json(book);
    });
};

exports.getBooks = function (req, res) {
    Book.find({}, function (err, books) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};

exports.getBook = function (req, res) {
    Book.findOne({ title: req.params.book }, function (err, book) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(book);
    });
};

exports.deleteBook = function (req, res) {
    console.log(req.params);
    Book.findOneAndRemove({ title: req.params.title }, function (err, books) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};