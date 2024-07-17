const AbstractRepository = require("./AbstractRepository");

class HairproductRepository extends AbstractRepository {
  constructor() {
    super({ table: "hairproduct" });
  }

  async create(hairproduct) {
    const { hairproductId, name, image, description, price, url, hairtype, hairconcern } = hairproduct;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (hairproductId, name, image, description, price, url, hairtype, hairconcern) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [hairproductId, name, image, description, price, url, hairtype, hairconcern]
    );
    return result.insertId;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT hairproductId, name, image, description, price, url, hairtype, hairconcern FROM ${this.table} WHERE hairproductId = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT hairproductId, name, image, description, price, url, hairtype, hairconcern FROM ${this.table}`
    );
    return rows;
  }

  async update(id, hairproduct) {
    const { name, image, description, price, url, hairtype, hairconcern } = hairproduct;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, image = ?, description = ?, price = ?, url = ?, hairtype = ?, hairconcern = ? WHERE hairproductId = ?`,
      [name, image, description, price, url, hairtype, hairconcern, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE hairproductId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = HairproductRepository;
