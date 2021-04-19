var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({ 
    title: String,
    name: String,
    review: String,
});

module.exports = mongoose.model('Review', reviewSchema);