import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import router from './routes/studentRoutes.js'
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
    try {
        let res = await mongoose.connect(process.env.MONGODB_UPI)
        console.log("Mongodb connected ", res.connection.host);
    } catch (err) {
        console.log("Mongodb connection error :- ", err);
    }
}

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000;

connectDB()

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Node.js REST API is Running."
    })
})

app.use(express.json());
app.use("/api/students", router)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`Server Start :- http://localhost:${PORT}`);
})