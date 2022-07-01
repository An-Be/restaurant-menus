const { sequelize } = require('./db');
const { Restaurant, Menu, Item } = require('./index');
const { seedRestaurant, seedMenu, seedItem } = require('./seedData');

describe('Restaurant and Menu Models', () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
      // the 'sync' method will create tables based on the model class
      // by setting 'force:true' the tables are recreated each time the 
      // test suite is run
      await sequelize.sync({ force: true });
  });

  test('can create a Restaurant', async () => {
      // TODO - write test
      const restaurant1 = await Restaurant.create(seedRestaurant[0])
      expect(restaurant1.name).toBe(seedRestaurant[0].name)
  });
  test('rating property works correctly', async () => {
    // TODO - write test
    const restaurant2 = await Restaurant.create(seedRestaurant[1])
    expect(restaurant2.rating).toBe(seedRestaurant[1].rating)
});

  test('can create a Menu', async () => {
      // TODO - write test
      const menu1 = await Menu.create(seedMenu[0])
      expect(menu1.name).toBe(seedMenu[0].name)
  });

  test('can find Restaurants', async () => {
      // TODO - write test
      const findRestaurants = await Restaurant.findAll();
      expect(findRestaurants.length).toEqual(2)
  });

  test('can find Menus', async () => {
      // TODO - write test
      const findMenus = await Menu.findAll();
      expect(findMenus.length).toEqual(1)
  });

  test('can delete Restaurants', async () => {
      // TODO - write test
      const restaurant2 = await Restaurant.create(seedRestaurant[0])
      const deletedRestaurants = await restaurant2.destroy();
      expect(Restaurant.length).toEqual(0);
  });

  test('created an Item', async () => {
    const item = await Item.create(seedItem[2]); //create an item
    expect(item.name).toBe(seedItem[2].name);
  });

  test('test to account for association between Items and Menus', async() => {
    const menu = await Menu.create(seedMenu[2]); //create Menu
    const masala = await Item.create(seedItem[0]); //create Item
    const soup = await Item.create(seedItem[1]); //create Item

    await menu.addItem(masala); //add item to menu
    await menu.addItem(soup); //add item to menu 

    const allItems = await menu.getItems(); //get all items in menu returns an array

    expect(allItems.length).toBe(2); //we've added 2 items to the menu
    expect(allItems[0] instanceof Item).toBeTruthy; //checks that the value at index 0 of the list - a item object, is in fact a item object

    
  });

})
