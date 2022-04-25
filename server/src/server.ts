import "reflect-metadata";
import {config} from "dotenv";
import {createServer} from "http";

import appServer from "./app";
import {socketServer} from "./sockets/socket";
import {dbConnection} from "./utils/dbConnection";
import {logger} from "./utils/logger";

// getting environment variable
config();

const PORT = process.env.PORT || 4000;

const httpServer = createServer(appServer);
socketServer(httpServer);

const start = async () => {
  // connecting to DB
  await dbConnection();

  httpServer.listen(PORT, () => {
    logger.info(`Server running on http://localhost:${PORT}`);
  });
};

start();
