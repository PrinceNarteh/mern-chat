import { OnConnect, SocketController } from "socket-controllers";
import { logger } from "../utils/logger";

@SocketController()
export class MessageController {
  @OnConnect()
  connection() {
    logger.info("Client connected");
  }
}
