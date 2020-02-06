const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    author: String,
    markdown: String,
    date: String
});

let Post = mongoose.model('Post', postSchema)

module.exports = Post;