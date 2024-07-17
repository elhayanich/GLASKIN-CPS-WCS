const AbstractRepository = require("./AbstractRepository");

class SkinproductRepository extends AbstractRepository {
  constructor() {
    super({ table: "skinproduct" });
  }

  async create(skinproduct) {
    const { skinproductId, name, image, description, price, url, skintype, skinconcern } = skinproduct;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (skinproductId, name, image, description, price, url, skintype, skinconcern) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [skinproductId, name, image, description, price, url, skintype, skinconcern]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT skinproductId, name, image, description, price, url, skintype, skinconcern FROM ${this.table} WHERE skinproductId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT skinproductId, name, image, description, price, url, skintype, skinconcern FROM ${this.table}`
    );
    return rows;
  }

  async update(id, skinproduct) {
    const { name, image, description, price, url, skintype, skinconcern } = skinproduct;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, image = ?, description = ?, price = ?, url = ?, skintype = ?, skinconcern = ? WHERE skinproductId = ?`,
      [name, image, description, price, url, skintype, skinconcern, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE skinproductId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = SkinproductRepository;

