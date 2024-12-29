import { Sequelize } from "sequelize-typescript";
import { envConfig } from "../config/envConfig";
import User from "./models/authModel";
import Task from "./models/taskModel";
import Category from "./models/categotyModel";

const sequelize = new Sequelize({
  database: envConfig.db_database,
  dialect: "mysql",
  username: envConfig.db_username,
  password: envConfig.db_password,
  host: envConfig.db_host,
  port: Number(envConfig.db_port),
  models: [__dirname + "/models/**/*.ts"],
});

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));

sequelize.sync({ force: false }).then(() => {
  console.log("database synced successfully");
});

User.hasMany(Task, { foreignKey: "taskId" });
Category.hasMany(Task, { foreignKey: "taskId" });
Task.belongsTo(User, { foreignKey: "userId" });
Task.belongsTo(Category, { foreignKey: "categoryId" });
