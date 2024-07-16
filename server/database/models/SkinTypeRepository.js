const AbstractRepository = require("./AbstractRepository");

class SkinTypeRepository extends AbstractRepository {
  constructor() {
    super({ table: "skinType" });
  }

  async create(skinType) {
    const { skintypeName } = skinType;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (skintypeName) VALUES (?)`,
      [skintypeName]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT skintypeId, skintypeName FROM ${this.table} WHERE skintypeId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT skintypeId, skintypeName FROM ${this.table}`
    );
    return rows;
  }

  async update(id, skinType) {
    const { skintypeName } = skinType;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET skintypeName = ? WHERE skintypeId = ?`,
      [skintypeName, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE skintypeId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = SkinTypeRepository;
