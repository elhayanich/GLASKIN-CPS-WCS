const AbstractSeeder = require('./AbstractSeeder');
const hairProducts = require('../data/hairproducts.json');

class HairproductSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'hairproduct', truncate: true });
  }

  async run() {
    try {
      await Promise.all(hairProducts.map(async (hairproduct) => {
        await this.insert({
          hairproductId: hairproduct.hairproductId,
          name: hairproduct.name,
          image: hairproduct.image,
          description: hairproduct.description,
          price: hairproduct.price,
          url: hairproduct.url,
          hairtype: hairproduct.hairtype,
          hairconcern: hairproduct.hairconcern
        });
      }));

      console.info('Hairproduct seeding completed.');
    } catch (error) {
      console.error('Error seeding Hairproducts:', error);
    }
  }
}

module.exports = HairproductSeeder;
