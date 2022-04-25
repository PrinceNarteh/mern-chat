import {
  ConnectedSocket,
  MessageBody,
  OnConnect,
  OnMessage,
  SocketController,
} from "socket-controllers";
import {Socket} from "socket.io";
import {logger} from "../../utils/logger";

const room = ["General", "Tech", "Finance", "Crypto"];
@SocketController()
export class MessageController {
  @OnConnect()
  connection() {
    logger.info("Client connected");
  }

  @OnMessage("join-room")
  joinRoom(@ConnectedSocket() socket: Socket, @MessageBody() room: string) {
    socket.join(room);
  }
}
