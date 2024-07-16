const AbstractRepository = require("./AbstractRepository");

class ProductHairTypeRepository extends AbstractRepository {
  constructor() {
    super({ table: "product_hairType" });
  }

  async create(productId, hairTypeId) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (productId, hairtypeId) VALUES (?, ?)`,
      [productId, hairTypeId]
    );
    return result.insertId;
  }

  async readAllByProductId(productId) {
    const [rows] = await this.database.query(
      `SELECT productId, hairtypeId FROM ${this.table} WHERE productId = ?`,
      [productId]
    );
    return rows;
  }

  async readAllByHairTypeId(hairTypeId) {
    const [rows] = await this.database.query(
      `SELECT productId, hairtypeId FROM ${this.table} WHERE hairtypeId = ?`,
      [hairTypeId]
    );
    return rows;
  }

  async delete(productId, hairTypeId) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE productId = ? AND hairtypeId = ?`,
      [productId, hairTypeId]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ProductHairTypeRepository;
