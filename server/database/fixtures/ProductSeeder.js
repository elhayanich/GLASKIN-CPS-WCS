const AbstractSeeder = require('./AbstractSeeder'); 
const products = require('../data/products.json'); 

class ProductSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'product', truncate: true }); 
  }

  async run() {
    try {
      await Promise.all(products.map(async (product) => {
        await this.insert({
          productId: product.productId,
          name: product.name,
          image: product.image,
          description: product.description,
          price: product.price,
          url: product.url,
          categoryId: product.categoryId
        });
      }));

      console.info('Product seeding completed.');
    } catch (error) {
      console.error('Error seeding products:', error);
    }
  }
}

module.exports = ProductSeeder;

