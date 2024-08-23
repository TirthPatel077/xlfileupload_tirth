import { Router } from 'express'
import uploadRouter from './uploadRouter.js';

const mainRouter = Router()

mainRouter.use("/upload", uploadRouter);

export default mainRouter;