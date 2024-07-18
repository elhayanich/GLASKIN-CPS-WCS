const AbstractSeeder = require('./AbstractSeeder');
const tips = require('../data/tips.json');

class TipsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: 'tips', truncate: true });
  }

  async run() {
    try {
      await Promise.all(tips.map(async (tip) => {
        await this.insert({
          tipsId: tip.tipsId,
          image: tip.image,
          title: tip.title,
          content: tip.content
        });
      }));

      console.info('Tips seeding completed.');
    } catch (error) {
      console.error('Error seeding Tips:', error);
    }
  }
}

module.exports = TipsSeeder;
