const { sequelize } = require('../db');
const { Sequelize } = require('sequelize');

//create Item model

const Item = sequelize.define('item', {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    price: Sequelize.INTEGER,
    vegeterian: Sequelize.BOOLEAN
});

module.exports = { Item };