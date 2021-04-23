var Book = require('./models/bookModel');

//Creating book
exports.createBook = function (req, res) {
    var newbook = new Book(req.body);
    newbook.save(function (err, book) {
        if (err) {
            res.status(400).json(err);
        }

        res.json(book);
    });
};

//Getting all books
exports.getBooks = function (req, res) {
    Book.find({}, function (err, books) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};

//Getting one book
exports.getBook = function (req, res) {
    Book.findOne({ title: req.params.book }, function (err, book) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(book);
    });
};

//Updating a book
exports.updateBook = function(req, res) {
    Book.findOneAndUpdate({title: req.params.title }, req.body, {new: true}, function (err, books) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(books);
    }); 
  };

//Deleting a book
exports.deleteBook = function (req, res) {
    console.log(req.params);
    Book.findOneAndRemove({ title: req.params.title }, function (err, books) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};