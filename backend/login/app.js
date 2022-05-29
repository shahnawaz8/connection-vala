const dotenv =require("dotenv")
dotenv.config()
const express =require("express")
const cors =require("cors")

const connectDB=require("./config/connectdb")
const  userRoutes = require('./routes/router.post.js')

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL


// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

// Load Routes

app.use("/api/user", userRoutes)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})