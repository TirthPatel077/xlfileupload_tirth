import express from "express";
import dotevn from "dotenv";
import morgan from "morgan";
import cors from "cors";

import connectDB from "./db/connectDb.js";
import mainRouter from "./routers/mainRouter.js";

dotevn.config();

connectDB();

const app = express();
app.use(express.raw({ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', limit: '10mb' }));

app.use(cors({ origin: "*", credentials: true}));
app.use(express.json());
app.use(morgan("dev"));

const port = 8080;

app.use("/api/v1", mainRouter);

app.listen(port, () => console.log(`Server running on mode on port ${port}`));
