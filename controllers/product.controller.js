var db = require("../db");
var products = db.get("products").value();

module.exports.getIndex = function(req, res) {
    var page = parseInt(req.query.page) || 1;
    var perPage = 8;
    var begin = (page-1) * perPage;
    var end = page * perPage;
    var countPage = Math.round(products.length/perPage);

    res.render("../views/product/product", {
        products: products.slice(begin, end),
        page: page, 
        countPage
    });
}