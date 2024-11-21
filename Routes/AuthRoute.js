import express from 'express';
import { UserLogin } from '../Controller/Authentication/Login.js';

const router = express.Router();

router.post('/login', UserLogin);

export default router;