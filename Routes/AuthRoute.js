import express from 'express';
import { UserLogin } from '../Controller/Authentication/Login.js';
import {UserRegister} from "../Controller/Authentication/Register.js";
import { verifyEmail } from '../Controller/Authentication/VerifyMail.js'; // Adjust the import path as necessary

const router = express.Router();

router.post('/login', UserLogin);
router.post('/register', UserRegister);
router.post('/verify-email', verifyEmail);

export default router;