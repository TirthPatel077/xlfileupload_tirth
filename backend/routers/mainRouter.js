import { Router } from 'express'

const mainRouter = Router()

mainRouter.use("/upload", uploadRouter);

export default mainRouter;