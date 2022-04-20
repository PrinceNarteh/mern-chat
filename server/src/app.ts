import express from "express";
import cors from "cors";

const appServer = express();
appServer.use(cors());
appServer.use(express.json());

export default appServer;
