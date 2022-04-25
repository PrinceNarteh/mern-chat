import {
  ConnectedSocket,
  EmitOnSuccess,
  MessageBody,
  OnConnect,
  OnMessage,
  SocketController,
  SocketIO,
} from "socket-controllers";
import {Server, Socket} from "socket.io";
import Message from "../../models/message.model";
import User from "../../models/user.model";

const rooms = ["General", "Tech", "Finance", "Crypto"];
async function getLastMessagesFromRoom(room: string) {
  return await Message.aggregate([
    {$match: {to: room}},
    {$group: {_id: "$date", messageByDate: {$push: "$$ROOT"}}},
  ]);
}

function sortRoomMessagesByDate(messages: any) {
  return messages.sort((a: any, b: any) => {
    let date1 = a._id.split("/");
    let date2 = b._id.split("/");

    date1 = date1[2] + date1[1] + date1[0];
    date2 = date2[2] + date2[1] + date2[0];

    return date1 < date2 ? -1 : 1;
  });
}

@SocketController()
export class MessageController {
  @OnConnect()
  @EmitOnSuccess("connection_success")
  connection() {
    console.log("User connected");
    return rooms;
  }

  @OnMessage("new-user")
  async newUser(@SocketIO() io: Server) {
    const members = await User.find({});
    io.emit("new-user", members);
  }

  @OnMessage("join-room")
  @EmitOnSuccess("room-messages")
  async joinRoom(
    @ConnectedSocket() socket: Socket,
    @MessageBody() room: string
  ) {
    socket.join(room);
    let roomMessages = await getLastMessagesFromRoom(room);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    return roomMessages;
  }
}
