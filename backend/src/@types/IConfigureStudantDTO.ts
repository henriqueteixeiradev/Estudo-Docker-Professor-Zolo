import { ClientConfig } from "pg";

export interface IConfigureStudantDTO extends ClientConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}
