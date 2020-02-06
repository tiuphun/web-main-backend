const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
    title: String,
    name: String,
    markdown: String,
    date: String,
    photos: [String],
    main_photos: {
        square: String,
        rect: String
    }
});

let Event = mongoose.model('Event', eventSchema)

module.exports = Event;