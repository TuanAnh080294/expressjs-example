var db = require("../db");

module.exports.index = function(req, res) {
	var sessionId = req.signedCookies.sessionId;
	var cart = db.get("sessions")
				.find({ id: sessionId })
				.value()
				.cart;
	res.send(cart);
}

module.exports.addToCart = function(req, res) {
	var sessionId = req.signedCookies.sessionId;
	var productId = req.params.productId;

	if(!sessionId) {
		res.redirect("/product");
		return;
	}

	var count = db.get('sessions')
					.find({ id: sessionId })
					.get('cart.' + productId, 0);

	db.get("sessions")
	.find({ id: sessionId })
	.set('cart.' + productId, count + 1)
	.write();

	var countProduct = Object.keys(db.get("sessions")
	.find({ id: sessionId }).value().cart).length;

	res.locals.countProduct = countProduct;
	res.redirect("/product");
}