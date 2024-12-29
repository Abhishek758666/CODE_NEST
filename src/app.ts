import express from "express";
import cors from "cors";
import authRouter from "./routes/auth";

export const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/vl/", authRouter);
