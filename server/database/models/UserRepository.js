const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const { username, email, password } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, password) VALUES (?, ?, ?)`,
      [username, email, password]
    );
    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(
      `SELECT userId, username, email FROM ${this.table}`
    );
    return rows;
  }

  async readOneById(id) {
    const [rows] = await this.database.query(
      `SELECT userId, username, email FROM ${this.table} WHERE userId = ?`,
      [id]
    );
    return rows[0];
  }

  async update(id, user) {
    const { username, email, password } = user;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, email = ?, password = ? WHERE userId = ?`,
      [username, email, password, id]
    );
    return result.affectedRows > 0;
  }

  async destroy(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE userId = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }

  async findUserByEmail(email) {
    const [result] = await this.database.query(
      `SELECT username, password FROM ${this.table} WHERE email = ?`,
      [email]
    );
    return result; 
  }
}

module.exports = UserRepository;

