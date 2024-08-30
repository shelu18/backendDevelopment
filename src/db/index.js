import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB...');
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDb connected successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('connection error', error);
        process.exit(1);  // process is a global object of nodejs and exit is a method of process
    }
};

export default connectDB; 