import express, { Router } from "express";
import errorHandler from "../middleware/errorHandler";
import { Login } from "../controllers/auth";
const router: Router = express.Router();

router.route("/tasks").get(errorHandler(Login));
router.route("/tasks").post(errorHandler(Login));
router.route("/task/:id").get(errorHandler(Login));
router.route("/task/:id").patch(errorHandler(Login));
router.route("/task/:id").delete(errorHandler(Login));

router.route("/tasks/columns").get(errorHandler(Login));
router.route("/tasks/columns").post(errorHandler(Login));
router.route("/tasks/column/:id").patch(errorHandler(Login));
router.route("/tasks/column/:id").delete(errorHandler(Login));

export { router as tasks };
