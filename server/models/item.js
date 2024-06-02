const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    itemname: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    inventoryCount: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    reviews: [reviewSchema],
});

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

const Item = model('Item', itemSchema);

module.exports = Item;


