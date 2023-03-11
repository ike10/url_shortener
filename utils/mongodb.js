
import { MongoClient } from "mongodb";

let client;
let db;

export async function connectToDatabase() {
  if (!client) {
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db();
  }

  return { db, client };
}
