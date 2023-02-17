import mongoose from "mongoose";
import { config } from "../configs/database/dbConfig";

export class DB_Connection {
  async connect(uri: string) {
    try {
      const conn = await mongoose.createConnection(uri, config).asPromise();
      console.log(conn.host);
      return conn;
    } catch (error:any) {
      return error;
    }
  }
}
