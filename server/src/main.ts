import { createServer } from "http";
import { logger } from "../utils/logger";
import appServer from "./app";
const PORT = process.env.PORT || 4000;

const httpServer = createServer(appServer);

const server = httpServer.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
