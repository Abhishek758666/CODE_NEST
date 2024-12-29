import express, { Router } from "express";
import errorHandler from "../middleware/errorHandler";
import AuthController from "../controllers/authController";
const router: Router = express.Router();

router.route("/register").post(errorHandler(AuthController.Register));
router.route("/login").post(errorHandler(AuthController.Login));

export default router;
