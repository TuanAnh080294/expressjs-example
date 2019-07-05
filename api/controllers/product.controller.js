// var db = require("../db");
// var products = db.get("products").value();
var Product = require("../../models/product.model");

module.exports.getIndex = async function(req, res) {
    var products = await Product.find();
    // var page = parseInt(req.query.page) || 1;
    // var perPage = 8;
    // var begin = (page-1) * perPage;
    // var end = page * perPage;
    // var countPage = Math.round(products.length/perPage);

    // res.render("../views/product/product", {
    //     products: products.slice(begin, end),
    //     page: page, 
    //     countPage
    // });
    res.json({ products: products });
    
}

module.exports.create = async function(req, res) {
    var product = await Product.create(req.body);
    res.json(product);
}

module.exports.update = async function(req, res) {
    var ObjectId = require('mongoose').Types.ObjectId;
    var id = new ObjectId(req.params.id);
    var query = {_id: id};
    var product = await Product.findOneAndUpdate(query,{ name: req.body.name, image: req.body.image, des: req.body.des });
    res.json(JSON.stringify(product));
}

module.exports.replace = async function(req, res) {
    var ObjectId = require('mongoose').Types.ObjectId;
    var id = new ObjectId(req.params.id);
    var query = {_id: id};
    var product = await Product.findOneAndReplace(query,{ name: req.body.name, image: req.body.image, des: req.body.des });
    res.json(JSON.stringify(product));
}

module.exports.delete = async function(req, res) {
    var ObjectId = require('mongoose').Types.ObjectId;
    var id = new ObjectId(req.params.id);
    var query = {_id: id};
    var product = await Product.findByIdAndDelete(id);
    res.json(JSON.stringify(product));
}