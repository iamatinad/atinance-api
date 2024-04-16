import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.routes.js"

dotenv.config();

const PORT = process.env.PORT

// create express app
const app = express()



// use middlewares
app.use(cors())
app.use(express.json())





// use routes
app.use("/api/users", userRoutes);

// connect to database
await mongoose.connect(process.env.MONGO_URI)


// start the express server
app.listen(PORT, () => {
    console.log(`atinance-api is running on port:${PORT} `)
})