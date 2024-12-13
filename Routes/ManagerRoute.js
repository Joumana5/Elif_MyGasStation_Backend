import express from 'express';
import { authGuard, roleGuard } from '../Middleware/AuthMiddleware.js';
import {
    getGasStation,
    createGasStation,
    updateGasStation,
    deleteGasStation
} from '../Controller/Manager/ManagerController.js';

const router = express.Router();

router.get('/gas-station', authGuard, roleGuard('manager'), getGasStation);
router.post('/gas-station', authGuard, roleGuard('manager'), createGasStation);
router.put('/gas-station', authGuard, roleGuard('manager'), updateGasStation);
router.delete('/gas-station', authGuard, roleGuard('manager'), deleteGasStation);

export default router;