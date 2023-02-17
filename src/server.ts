import express, { Application, Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import { DB_Connection } from "./database/database";
const serverport = process.env.PORT??6000;
const dbUri = process.env.DBURI || "mongodb://127.0.0.1:27017/test";

class Server_init {
  private readonly debug: string;
  constructor(debug: string) {
    this.debug = debug;
  }
  database_init(uri: string):Promise<unknown> {
    const db_init = new DB_Connection().connect(uri);
    return db_init
  }
  server_start(port: string, express_init: Application): void {
    express_init.listen(port, () => {
      this.debug === "true"
        ? console.log("Server on debug")
        : console.log("server start");
    });
  }
}
const serverCall = new Server_init("true");
serverCall.database_init(dbUri).then((r)=>{
  if (r){
    console.log("Done")
  }
})
serverCall.server_start("3000", express());