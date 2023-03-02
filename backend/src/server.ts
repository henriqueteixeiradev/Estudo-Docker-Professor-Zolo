import express from "express";
import "express-async-errors";
import { connect } from "database";
import cors from "cors";
import { students } from "routes";
import { StudentRepository } from "repositories";

async function main() {
  await connect();

  await StudentRepository.createTable();

  const app = express();

  app.use(express.json());

  app.use(cors());

  app.use("/", students);

  app.listen(3333, () => console.log("Server is running!"));
}

main().catch((error) => {
  console.log(error);
});
