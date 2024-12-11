import express from "express";
import { auth } from "./routes/auth";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth/", auth);
