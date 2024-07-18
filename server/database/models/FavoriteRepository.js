const AbstractRepository = require("./AbstractRepository");

class FavoriteRepository extends AbstractRepository {
  constructor() {
    super({ table: "favorite" });
  }

  async create(favorite) {
    const { userId, skinproductId, hairproductId, tipsId } = favorite;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (userId, skinproductId, hairproductId, tipsId) VALUES (?, ?, ?, ?)`,
      [userId, skinproductId, hairproductId, tipsId]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT favoriteId, userId, skinproductId, hairproductId, tipsId FROM ${this.table} WHERE favoriteId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT favoriteId, userId, skinproductId, hairproductId, tipsId FROM ${this.table}`
    );
    return rows;
  }

  async update(id, favorite) {
    const { userId, skinproductId, hairproductId, tipsId } = favorite;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET userId = ?, skinproductId = ?, hairproductId = ?, tipsId = ? WHERE favoriteId = ?`,
      [userId, skinproductId, hairproductId, tipsId, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE favoriteId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = FavoriteRepository;

