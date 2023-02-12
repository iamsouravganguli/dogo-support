import mongoose, { Connection } from "mongoose";

const config: object = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export class MongoDBConnection {
  dburi: string | undefined;
  async Connection(dburi: string): Promise<void> {
    this.dburi = dburi;
    await mongoose
      .createConnection(this.dburi, config)
      .asPromise()
      .then((res) => {
        const states = res.readyState;
        switch (states) {
          case 0:
            console.log("DB Disconnected");
            break;
          case 1:
            console.log("DB Connected");
            break;
          case 3:
            console.log("DB Disconnecting");
            break;
          default:
            99;
            console.log("DB Uninitialized");
            break;
        }
      });
  }
}
