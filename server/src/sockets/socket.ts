import path from "path";
import { Server as HttpServer } from "http";
import { Server } from "socket.io";
import { useSocketServer } from "socket-controllers";
import { corsOptions } from "../utils/corsOptions";

export const socketServer = (httpServer: HttpServer) => {
  const io = new Server(httpServer, {
    cors: corsOptions,
  });

  useSocketServer(io, {
    controllers: [path.join(__dirname, "controllers", "**", "*.ts")],
  });

  return io;
};
