import express from 'express';
import CompletionController from '../controllers/completionController.js';

const router = express.Router();

router
    .post('/completion', CompletionController.getCompletion)

export default router;