var Review = require('./models/reviewModel');

exports.createReview = function (req, res) {
    var newreview = new Review(req.body);
    newreview.save(function (err, review) {
        if (err) {
            res.status(400).json(err);
        }

        res.json(review);
    });
};