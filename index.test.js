const { sequelize } = require('./db');
const { Restaurant, Menu } = require('./index');
const { seedRestaurant, seedMenu } = require('./seedData');

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

  test('can create a Menu', async () => {
      // TODO - write test
      const menu1 = await Menu.create(seedMenu[0])
      expect(menu1.name).toBe(seedMenu[0].name)
  });

  test('can find Restaurants', async () => {
      // TODO - write test
      const findRestaurants = await Restaurant.findAll();
      expect(findRestaurants.length).toEqual(1)
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
})