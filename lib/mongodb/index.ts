
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if(!uri) throw new Error('Please define the MONGODB_URI environment variable inside .env.local');

export const client = new MongoClient(uri);
