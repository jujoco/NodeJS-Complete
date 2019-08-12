const Sequelize = require('sequelize');
const { mysqlKey } = require('./keys');

const sequelize = new Sequelize('node-complete', 'root', mysqlKey, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;