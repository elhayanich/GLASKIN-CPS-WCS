const AbstractRepository = require("./AbstractRepository");

class TipsRepository extends AbstractRepository {
  constructor() {
    super({ table: "tips" });
  }

  async create(tips) {
    const { title, content } = tips;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (image, title, content) VALUES (?, ?)`,
      [title, content]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT tipsId, image, title, content FROM ${this.table} WHERE tipsId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT tipsId, image, title, content FROM ${this.table}`
    );
    return rows;
  }

  async update(id, tips) {
    const { image, title, content } = tips;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET image = ?, title = ?, content = ? WHERE tipsId = ?`,
      [image, title, content, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE tipsId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = TipsRepository;
