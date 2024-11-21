import express from 'express';
import { authGuard, roleGuard } from '../Middleware/AuthMiddleware.js';
import { getClientProfile, updateClientProfile } from '../Controller/Client.js';

const router = express.Router();

router.get('/client', authGuard, roleGuard('client'), (req, res) => {
    res.send('Welcome Client');
});

router.get('/dashboard/client', authGuard, roleGuard('client'), (req, res) => {
    res.send('Client Dashboard');
});

router.get('/client/profile', authGuard, roleGuard('client'), getClientProfile);
router.put('/client/profile', authGuard, roleGuard('client'), updateClientProfile);

export default router;