import mongoose from 'mongoose'

export default function connectMongoDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI || '')
    console.log('Connected to MongoDB')
  } catch (e) {
    console.error(e)
  }
}
