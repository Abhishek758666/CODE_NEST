import mongoose, { Document, Schema } from "mongoose";
import { z } from "zod";

const taskSchema = new Schema(
  {
    description: { type: String, required: true },
    position: { type: String, required: true },
    status: { type: String, required: true },
    code: { type: String, required: true },
    deadline: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    column: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Column",
      required: true,
    },
  },
  { timestamps: true }
);

export interface ITask extends Document {
  title: string;
  status: string;
  description: string;
  code: string;
  deadline: string;
  user: mongoose.Types.ObjectId;
  column: mongoose.Types.ObjectId;
}

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
