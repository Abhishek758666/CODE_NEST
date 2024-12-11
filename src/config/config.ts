import { config } from "dotenv";
config();

export const envConfig = {
  port: process.env.PORT,
  client_id: process.env.GOOGLE_CLIENID,
  google_secret: process.env.GOOGLE_SECRET,
};
