import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./utils/connectDB.js";
import router from "./routes/user.routes.js";
import CompanyRouter from "./routes/company.routes.js";

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 3000

app.use((express.json()))
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
}

app.get("/" , (req , res) => {
    res.send("Home Page of Job Portal")
})

app.use(cors(corsOptions))


// Here we have all our API's 

app.use("/api/user" , router)
app.use("/api/company" , CompanyRouter )

app.listen(PORT , () => {
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
})