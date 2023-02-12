import express, { Application, Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";

dotenv.config();
import { MongoDBConnection } from "./configs/database/db";
const serverport = process.env.PORT || 6000;
const dburi = process.env.DBURI || "mongodb://127.0.0.1:27017/test";
interface server_info {
  port: string | number | undefined;
  server: Application;
}
class ServerInit {
  private data: server_info;

  constructor(data: server_info) {
    this.data = data;
  }

  dbconn(): void {
    const connection = new MongoDBConnection().Connection(dburi);
  }

  higher_middleware_init(): boolean {
    return true;
  }

  middleware_init(): boolean {
    return true;
  }

  server_on(): void {
    this.data.server.listen(this.data.port, (): void => {
      console.log(`Server working on port: ${this.data.port}`);
    });
  }
}

const callServerInit = new ServerInit({
  port: serverport,
  server: express(),
});

callServerInit.dbconn();
callServerInit.server_on();
