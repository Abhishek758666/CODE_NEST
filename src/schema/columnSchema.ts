import mongoose, { Document, Schema } from "mongoose";
import { z } from "zod";

const columnSchema = new Schema(
  {
    title: { type: String, required: true },
    emoji: { type: String, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

export interface IColumn extends Document {
  title: string;
  emoji: string;
  color: string;
}

const Column = mongoose.model<IColumn>("Column", columnSchema);

export default Column;
