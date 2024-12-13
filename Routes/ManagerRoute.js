import express from 'express';
import { authGuard, roleGuard } from '../Middleware/AuthMiddleware.js';
import {
    getAllGasStations,
    getGasStation,
    createGasStation,
    updateGasStation,
    deleteGasStation
} from '../Controller/Manager/ManagerController.js';

const router = express.Router();

// router.get('/gas-station', authGuard, roleGuard('manager'), getGasStation);
// router.post('/gas-station', authGuard, roleGuard('manager'), createGasStation);
// router.put('/gas-station', authGuard, roleGuard('manager'), updateGasStation);
// router.delete('/gas-station', authGuard, roleGuard('manager'), deleteGasStation);
router.get('/all/gas-stations', getAllGasStations);
router.get('/get/gas-station/:id', getGasStation);
router.put('/gas-station/:id', updateGasStation);
router.delete('/gas-station/:id', deleteGasStation);
router.post('/gas-station/', createGasStation);

export default router;