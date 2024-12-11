import mongoose, { Document, Schema } from "mongoose";
import { z } from "zod";

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { timestamps: true }
);

export interface IUser extends Document {
  email: string;
  googleId: string;
  name: string;
  picture: string;
}

const User = mongoose.model<IUser>("User", userSchema);

export default User;
