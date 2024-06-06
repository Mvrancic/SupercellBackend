import { config } from 'dotenv';

config();

export const port = process.env.PORT || 5000;
export const mongoURI = process.env.MONGO_URI;