import { config } from "dotenv";
config();

export const envConfig = {
  port: process.env.PORT,

  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_port: process.env.DB_PORT,
  db_host: process.env.DB_HOST,
  db_database: process.env.DB_DATABASE,

  client_id: process.env.GOOGLE_CLIENID,
  google_secret: process.env.GOOGLE_SECRET,
};
