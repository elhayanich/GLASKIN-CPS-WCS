const AbstractRepository = require("./AbstractRepository");

class CategoryRepository extends AbstractRepository {
  constructor() {
    super({ table: "category" });
  }

  async create(category) {
    const { categoryName } = category;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (categoryName) VALUES (?)`,
      [categoryName]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT categoryId, categoryName FROM ${this.table} WHERE categoryId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT categoryId, categoryName FROM ${this.table}`
    );
    return rows;
  }

  async update(id, category) {
    const { categoryName } = category;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET categoryName = ? WHERE categoryId = ?`,
      [categoryName, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE categoryId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = CategoryRepository;

