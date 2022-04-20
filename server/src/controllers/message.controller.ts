import { OnConnect, SocketController } from "socket-controllers";
import { logger } from "../utils/logger";

const room = ["General", "Tech", "Finance", "Crypto"]
@SocketController()
export class MessageController {
  @OnConnect()
  connection() {
    logger.info("Client connected");
  }
}
