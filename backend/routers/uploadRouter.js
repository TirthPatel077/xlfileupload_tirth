import { Router } from 'express'

const uploadRouter = Router()

uploadRouter.post("/", (req, res) => {

    res.send("File Upload API")
    
})

export default uploadRouter;

