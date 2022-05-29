const mongoose=require("mongoose")

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "geekshop"
    }
    await mongoose.connect(DATABASE_URL)
    console.log('Connected Successfully...')
  } catch (error) {
    console.log(error)
  }
}

module.exports=connectDB;