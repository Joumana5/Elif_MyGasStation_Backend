import express from 'express';
import { authGuard, roleGuard } from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/manager', authGuard, roleGuard('manager'), (req, res) => {
    res.send('Welcome Manager');
});

router.get('/manager/dashboard', authGuard, roleGuard('manager'), (req, res) => {
    res.send('Manager Dashboard');
});

export default router;