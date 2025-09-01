const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0
  },
    description: {
    type: String,
  },
    inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true 
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;

