import { Client } from "pg";
import { IConfigureStudantDTO } from "../@types/IConfigureStudantDTO";

const dbConfig: IConfigureStudantDTO = {
  host: "db",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "postgres",
};

let connected = false;

const client = new Client(dbConfig);

export async function connect() {
  await client.connect();
  connected = true;
}

export const query = async (query: string, values?: string[]): Promise<any> => {
  if (!connected) {
    throw new Error("Database is not connected");
  }

  const { rows } = await client.query(query, values);

  return rows;
};
