const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
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
  },
  { timestamps: true, versionKey: false }
);

const People = mongoose.model('People', PeopleSchema);

module.exports = People;
