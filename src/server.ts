import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'your-database-name';

export const connectDB = async () => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    console.log('Connected to MongoDB');

    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};
