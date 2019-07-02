var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    name: String,
    image: String,
    des: String,
});

var Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;