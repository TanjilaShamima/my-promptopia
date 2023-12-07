import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('Mongo DB is already connected!');
    } else {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "share prompts",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("mongodb is connected!")
    }
}