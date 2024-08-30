import 'dotenv/config';
import connectDB from './db/index.js';
import app from './app.js';

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server is running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch((err) => {
        console.log("Connection failed", err);
    });
