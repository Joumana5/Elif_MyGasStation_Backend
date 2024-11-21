import express from 'express';
import { authGuard, roleGuard, redirectBasedOnRole } from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/dashboard', authGuard, redirectBasedOnRole);

router.get('/client', authGuard, roleGuard('client'), (req, res) => {
    res.send('Welcome Client');
});

export default router;