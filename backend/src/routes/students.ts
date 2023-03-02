import { Router } from "express";
import { StudentController } from "controllers";

const router = Router();

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);

export default router;
