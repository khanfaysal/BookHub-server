import { MongoClient, Db } from 'mongodb';
import config from './config';

const url = config.database_url;
const dbName = 'BookHub';

let db: Db;

export const connectDB = async () => {
  try {
    const client = new MongoClient(url as string, {
      useUnifiedTopology: true,
    });
    await client.connect();
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

  

export const getDB = () => {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db;
};
