import express from "express";
import dotevn from "dotenv";
import morgan from "morgan";
import cors from "cors";

import connectDB from "./db/connectDb.js";

dotevn.config();

connectDB();

const app = express();

app.use(cors({ origin: "*", credentials: true}));
app.use(express.json());
app.use(morgan("dev"));


const port = 8080;

app.listen(port, () => console.log(`Server running on mode on port ${port}`));
