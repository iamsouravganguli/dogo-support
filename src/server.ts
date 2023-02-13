import express, { Application, Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
dotenv.config();
// import { MongoDBConnection } from "./configs/database/db";
import { DB_Conection } from "./database/database";
const serverport = process.env.PORT || 6000;
const dburi = process.env.DBURI || "mongodb://127.0.0.1:27017/test";

class Server_init {
  private debug: string;
  constructor(debug: string) {
    this.debug = debug;
  }
  database_init(uri: string) {
    const db_init = new DB_Conection().connect(dburi).finally
  }
  server_start(port: string, express_init: Application): void {
    express_init.listen(port, () => {
      this.debug === "true"
        ? console.log("Server on debug")
        : console.log("server start");
    });
  }
}
const servercall = new Server_init("false")
servercall.database_init(dburi);
servercall.server_start("4000", express());
