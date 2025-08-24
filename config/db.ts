// import mongoose from "mongoose";

// const mongoUri = process.env.MONGO_URI;
// if (!mongoUri) {
//   throw new Error('Error: MONGO_URI is not defined in environment variables.');
// }


// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(mongoUri);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// }

// export default connectDB;


import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("Error: MONGO_URI is not defined in environment variables.");
}

/**
 * Prevent multiple connections in development and serverless environments (like Vercel)
 */
let isConnected = null;

const connectDB = async () => {
  if (isConnected) {
    // Use existing database connection
    return;
  }

  try {
    const db = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("✅ MongoDB connected:", db.connection.host);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("MongoDB connection failed!");
  }
};

export default connectDB;
