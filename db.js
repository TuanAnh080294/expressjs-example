//set up database(lowdb)
const low = require('lowdb');
const fileSync = require('lowdb/adapters/FileSync');
const adapter = new fileSync('db.json');
const db = low(adapter);


db.defaults({ users: [], sessions: [] }).write();

module.exports = db;