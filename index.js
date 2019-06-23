//set up express.js
const express = require('express');
const app = express();
const port = 3000;
var userRoute = require('./routes/user.route');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
	res.render('index');
});

app.use('/user', userRoute);

app.listen(port, function() {
	console.log('Example app listening on port ' + port);
});