const { Restaurant } = require('./models/Restaurant');
const { Menu } = require('./models/Menu');
const { Item } = require('./models/Item');

//associate the menu and items models

Item.belongsTo(Menu);
Menu.hasMany(Item);

module.exports = { Restaurant, Menu, Item };
