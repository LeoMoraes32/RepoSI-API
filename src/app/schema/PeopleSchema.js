const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  year_entry: {
    type: String
  },
  type: {
    type: String
  },
  image: {
    type: String
  },
  cover: {
    type: String
  }
});

const People = mongoose.model('People', PeopleSchema);

module.exports = People;
