import express, { Router } from "express";
import errorHandler from "../middleware/errorHandler";
const router: Router = express.Router();

router.route("/tasks").get(errorHandler(() => {}));
router.route("/tasks").post(errorHandler(() => {}));
router.route("/task/:id").get(errorHandler(() => {}));
router.route("/task/:id").patch(errorHandler(() => {}));
router.route("/task/:id").delete(errorHandler(() => {}));

export { router as tasks };
