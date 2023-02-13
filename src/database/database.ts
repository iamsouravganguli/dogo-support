import mongoose from "mongoose";
import { config } from "../configs/database/dbConfig";

export class DB_Conection {
  async connect(uri: string) {
    try {
      const conn = await mongoose.createConnection(uri, config).asPromise();
      conn.host;
      console.log(conn.host);
      return conn;
    } catch (error) {
      return error;
    }
  }
}
