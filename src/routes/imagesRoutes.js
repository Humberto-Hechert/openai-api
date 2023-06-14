import express from 'express';
import ImageController from '../controllers/imageController.js';

const router = express.Router();

router
    .post('/create', ImageController.getNewImage)

export default router;