import { query } from "database/index";

class StudentRepository {
  async createTable() {
    await query(
      `CREATE TABLE IF NOT EXISTS students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )`
    );
  }

  async findAll() {
    const rows = await query(`SELECT * FROM students ORDER BY name`);

    return rows;
  }

  async onCreate({ name }: { name: string }) {
    const [row] = await query(
      `
        INSERT INTO students (name)
        VALUES ($1)
        RETURNING *
        `,
      [name]
    );

    return row;
  }
}

export default new StudentRepository();
