import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static("Public"));
app.use(cookieParser())

// app.get('/', (req,res) => {
//     res.send("Heyy There !!!")
// })

import uploadRouter from "./routes/upload.routes.js"
import createHostelRouter from "./routes/createHostel.routes.js"
import allotHostelRouter from "./routes/allot.routes.js"
import getHostelsRouter from "./routes/getHostels.routes.js"
import getAllotmentRouter from "./routes/getAllotment.routes.js"

// routes declaration

app.use("/api/v1",uploadRouter);
app.use("/api/v1/",createHostelRouter);
app.use("/api/v1/",allotHostelRouter);
app.use("/api/v1/",getAllotmentRouter);
app.use("/api/v1/",getHostelsRouter)

export default app;