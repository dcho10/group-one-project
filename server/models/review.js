const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
  reviewBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Review = model('Review', reviewSchema);

module.exports = Review;