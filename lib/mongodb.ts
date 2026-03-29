import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI!;

const options = {
  maxPoolSize: 1,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 10000,
};

declare global {
  // eslint-disable-next-line no-var
  var _mongoClient: MongoClient | undefined;
}

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  if (!globalThis._mongoClient) {
    globalThis._mongoClient = new MongoClient(uri, options);
  }
  client = globalThis._mongoClient;
} else {
  client = new MongoClient(uri, options);
}

export async function getDb(): Promise<Db> {
  await client.connect();
  return client.db("tilde");
}
