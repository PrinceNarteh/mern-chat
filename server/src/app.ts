import express from "express";
import cors from "cors";
import appRouter from "./routes/auth.router";

const appServer = express();
appServer.use(cors());
appServer.use(express.json());
appServer.use(express.urlencoded({ extended: true }));

appServer.use("/auth", appRouter);

export default appServer;
