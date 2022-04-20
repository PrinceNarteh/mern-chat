import { createServer } from "http";
import { logger } from "../utils/logger";
const PORT = process.env.PORT || 4000;

const httpServer = createServer();

const server = httpServer.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
