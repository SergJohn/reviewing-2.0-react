var Review = require('./models/reviewModel');

//Creating a review
exports.createReview = function (req, res) {
    var newreview = new Review(req.body);
    newreview.save(function (err, review) {
        if (err) {
            res.status(400).json(err);
        }

        res.json(review);
    });
};

//Getting all reviews
exports.getReviews = function (req, res) {
    Review.find({}, function (err, reviews) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(reviews);
    });
};

//Getting one review
exports.getReview = function (req, res) {
    Review.findOne({ title: req.params.review }, function (err, review) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(review);
    });
};

//Updating a review
exports.updateReview = function(req, res) {
    Review.findOneAndUpdate({title: req.params.title }, req.body, {new: true}, function (err, reviews) {
      if (err) {
        res.status(400).json(err); 
      } 
      res.json(reviews);
    }); 
  };

//Deleting a review
exports.deleteReview = function (req, res) {
    console.log(req.params);
    Review.findOneAndRemove({ review: req.params.review }, function (err, review) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(review);
    });
};