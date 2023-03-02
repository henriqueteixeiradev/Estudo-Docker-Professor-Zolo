import { Request, Response } from "express";
import { StudentRepository } from "repositories";

class StudentController {
  async index(request: Request, response: Response) {
    const students = await StudentRepository.findAll();

    return response.json(students);
  }

  async store(request: Request, response: Response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const studant = await StudentRepository.onCreate({ name });

    return response.json(studant);
  }
}

export default new StudentController();
