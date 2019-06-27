//set up express.js
require('dotenv').config();
console.log(process.env.SESSION_SECRET);

const express = require('express');
const app = express();
const port = 3000;
var userRoute = require('./routes/user.route');
var authRoute = require("./routes/auth.route");
var authMiddlewares = require("./middlewares/auth.middlewares");
var productRoute = require("./routes/product.route");

var cookieParser = require('cookie-parser');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));
app.use(cookieParser('asdsadfsdgd123423423'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index');
});

app.use('/user',authMiddlewares.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute);

app.listen(port, function() {
	console.log('Example app listening on port ' + port);
});