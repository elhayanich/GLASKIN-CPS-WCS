const AbstractRepository = require("./AbstractRepository");

class ProductRepository extends AbstractRepository {
  constructor() {
    super({ table: "product" });
  }

  async create(product) {
    const { name, image, description, price, url, categoryId } = product;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, image, description, price, url, categoryId) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, image, description, price, url, categoryId]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT productId, name, image, description, price, url, categoryId FROM ${this.table} WHERE productId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT productId, name, image, description, price, url, categoryId FROM ${this.table}`
    );
    return rows;
  }

  async update(id, product) {
    const { name, image, description, price, url, categoryId } = product;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, image = ?, description = ?, price = ?, url = ?, categoryId = ? WHERE productId = ?`,
      [name, image, description, price, url, categoryId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE productId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = ProductRepository;

