const AbstractRepository = require("./AbstractRepository");

class HairTypeRepository extends AbstractRepository {
  constructor() {
    super({ table: "hairType" });
  }

  async create(hairType) {
    const { hairtypeName } = hairType;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (hairtypeName) VALUES (?)`,
      [hairtypeName]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT hairtypeId, hairtypeName FROM ${this.table} WHERE hairtypeId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT hairtypeId, hairtypeName FROM ${this.table}`
    );
    return rows;
  }

  async update(id, hairType) {
    const { hairtypeName } = hairType;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET hairtypeName = ? WHERE hairtypeId = ?`,
      [hairtypeName, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE hairtypeId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = HairTypeRepository;
