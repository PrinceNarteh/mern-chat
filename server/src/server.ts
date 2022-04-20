import { createServer } from "http";
import appServer from "./app";
import { socketServer } from "./socket";
import { logger } from "./utils/logger";
const PORT = process.env.PORT || 4000;

const httpServer = createServer(appServer);
socketServer(httpServer);

const server = httpServer.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
