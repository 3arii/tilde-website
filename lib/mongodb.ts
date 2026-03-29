import { MongoClient, Db } from "mongodb";

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

function getClient(): MongoClient {
  if (client) return client;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");

  if (process.env.NODE_ENV === "development") {
    if (!globalThis._mongoClient) {
      globalThis._mongoClient = new MongoClient(uri, options);
    }
    client = globalThis._mongoClient;
  } else {
    client = new MongoClient(uri, options);
  }
  return client;
}

export async function getDb(): Promise<Db> {
  const client = getClient();
  await client.connect();
  return client.db("tilde");
}
