import express from 'express';
import { authGuard, roleGuard } from '../Middleware/AuthMiddleware.js';
import { getUserProfile, updateUserProfile } from '../Controller/Profile.js';

const router = express.Router();

router.get('/client/profile', authGuard, roleGuard('client'), getUserProfile);
router.put('/client/profile', authGuard, roleGuard('client'), updateUserProfile);

router.get('/manager/profile', authGuard, roleGuard('manager'), getUserProfile);
router.put('/manager/profile', authGuard, roleGuard('manager'), updateUserProfile);

export default router;