import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB Connected")
    })

    console.log("MONGODB_URL:", process.env.MONGODB_URL);

    await mongoose.connect(`${process.env.MONGODB_URL}`)
}

export default connectDB;