import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDb connected successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('connection error', error);
        process.exit(1);  // process is a global object of nodejs and exit is a method of process
                          // different types of exit codes are there for different types of errors
    }
};

export default connectDB; 