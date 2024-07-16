const AbstractSeeder = require('./AbstractSeeder'); 
const categories = require('../data/categories.json'); 

class CategorySeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'category', truncate: true }); 
  }

  run() {
    categories.forEach((category) => {
      this.insert({
        categoryId: category.categoryId,
        categoryName: category.categoryName,
      });
    });
  }
}

module.exports = CategorySeeder;
