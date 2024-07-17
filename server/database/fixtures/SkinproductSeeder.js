const AbstractSeeder = require('./AbstractSeeder');
const skinProducts = require('../data/skinproducts.json');

class SkinproductSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'skinproduct', truncate: true });
  }

  async run() {
    try {
      await Promise.all(skinProducts.map(async (skinproduct) => {
        await this.insert({
          skinproductId: skinproduct.skinproductId,
          name: skinproduct.name,
          image: skinproduct.image,
          description: skinproduct.description,
          price: skinproduct.price,
          url: skinproduct.url,
          skintype: skinproduct.skintype,
          skinconcern: skinproduct.skinconcern
        });
      }));

      console.info('Skinproduct seeding completed.');
    } catch (error) {
      console.error('Error seeding Skinproducts:', error);
    }
  }
}

module.exports = SkinproductSeeder;
