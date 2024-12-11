import { app } from "./src/app";
import { envConfig } from "./src/config/config";

const port = envConfig.port || 4001;
const server = () =>
  app.listen(port, () => {
    console.log(`server is starting on port: ${port}`);
  });
server();
