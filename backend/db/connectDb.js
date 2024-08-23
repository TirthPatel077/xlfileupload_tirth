import mongoose from 'mongoose';

const connectDB = async () => {

    try {
        const conn = await mongoose.connect("mongodb+srv://sankalp123:sanku2003@cluster0.yvjsgnz.mongodb.net/xlFileUpload");
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;
