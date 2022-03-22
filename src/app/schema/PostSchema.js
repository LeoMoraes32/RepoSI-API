const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
    people_id_fk: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'People',
      required: true
    },
    visit: {
      type: Number
    }
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
