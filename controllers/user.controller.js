// var express = require('express');
var db = require('../db');
var users = db.get('users').value();
const shortid = require('shortid');

module.exports.index = function(req, res) {
	res.render('../views/user/user', {
		users: users
	});
};

module.exports.search = function(req, res) {
	var q = req.query.q;
	var queryMatches = users.filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) != -1;
	});
	res.render('../views/user/user', {
		users: queryMatches,
		query: q
	});
};

module.exports.create = function(req, res) {
	console.log(req.cookies);
	res.render('user/create');
};

module.exports.postCreate = function(req, res) {
	var user = req.body;
	user.id = shortid.generate();
	db.get('users').push(user).write();
	// console.log(res.locals);
	res.cookie("id","123456");
	res.redirect('/user');
};

module.exports.view = function(req, res) {
	var id = req.params.id;
	var user = db.get('users').find( {id: id}).value();
	res.render('user/view', {
		user: user
	});
};