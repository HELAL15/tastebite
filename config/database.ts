
import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI
if (!mongoUri) {
  throw new Error('Error: MONGO_URI is not defined in environment variables.');
}
 const connectDB = async ()=> {
    try {
        const conn = await mongoose.connect(mongoUri)
        console.log(mongoUri);
        
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}

export default connectDB