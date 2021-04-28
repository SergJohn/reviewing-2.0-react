var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({ 
    title: { type: String, unique: true, lowercase: true},
    author: String,
});

module.exports = mongoose.model('Book', bookSchema);