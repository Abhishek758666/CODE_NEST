import express, { Router } from "express";
import errorHandler from "../middleware/errorHandler";
import { Login } from "../controllers/auth";
const router: Router = express.Router();

router.route("/login").post(errorHandler(Login));

export { router as auth };
