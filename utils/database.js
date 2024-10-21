import mongoose from "mongoose";

let isConnectd = false;  // track connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnectd){
        console.log('MongoDb is already connected!');
        return;
    } 

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, 
        });

        isConnectd = true;

        console.log("MongoDB connected");

    }catch(err){
        console.log('Failed to connect to MongoDB', err);
    }
} 