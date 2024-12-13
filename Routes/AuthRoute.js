import express from 'express';
import { UserLogin } from '../Controller/Authentication/Login.js';
import {UserRegister} from "../Controller/Authentication/Register.js";

const router = express.Router();

router.post('/login', UserLogin);
router.post('/register', UserRegister);

export default router;