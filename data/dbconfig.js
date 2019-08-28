const knex = require('knex');
const knexConfig = require('../knexfile');

const enviornment = process.env.ENVIORNMENT || 'development';
const db = knex(knexConfig[enviornment])

module.exports = db;