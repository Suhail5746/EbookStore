// routes/messageRoutes.js
import express from 'express';
import createMessage from "../controller/messgae.js";

const router = express.Router();

router.post('/messages', createMessage);

export default router;
