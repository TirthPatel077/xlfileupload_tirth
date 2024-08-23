import { Router } from 'express'
import { uploadFile } from '../controllers/upload_file.js';
import multer from 'multer';

const uploadRouter = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

uploadRouter.post("/",upload.single('file'), uploadFile)

export default uploadRouter;

