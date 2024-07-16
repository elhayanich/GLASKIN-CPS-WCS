const AbstractRepository = require("./AbstractRepository");

class ProductSkinTypeRepository extends AbstractRepository {
  constructor() {
    super({ table: "product_skinType" });
  }

  async create(productId, skinTypeId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (productId, skintypeId) VALUES (?, ?)`,
      [productId, skinTypeId]
    );
    return result.insertId;
  }

  async readAllByProductId(productId) {
    const [rows] = await this.database.query(
      `SELECT productId, skintypeId FROM ${this.table} WHERE productId = ?`,
      [productId]
    );
    return rows;
  }

  async readAllBySkinTypeId(skinTypeId) {
    const [rows] = await this.database.query(
      `SELECT productId, skintypeId FROM ${this.table} WHERE skintypeId = ?`,
      [skinTypeId]
    );
    return rows;
  }

  async delete(productId, skinTypeId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE productId = ? AND skintypeId = ?`,
      [productId, skinTypeId]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ProductSkinTypeRepository;
