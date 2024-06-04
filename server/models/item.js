const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    itemName: {
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
    // reviews: [reviewSchema],
});

const Item = model('Item', itemSchema);
// const Review = model('Review', reviewSchema);

// module.exports = {Item, Review};

module.exports = Item;


