import express from 'express';
import { authGuard, roleGuard } from '../Middleware/AuthMiddleware.js';
import { getClientProfile, updateClientProfile, updateUser, deleteUser, getAllUsers, getUserById } from '../Controller/Client/ClientController.js';

const router = express.Router();

// router.get('/client', authGuard, roleGuard('client'), (req, res) => {
//     res.send('Welcome Client');
// });

router.get('/dashboard/client', authGuard, roleGuard('client'), (req, res) => {
    res.send('Client Dashboard');
});

router.get('/all', getAllUsers);
router.get('/get/:id', getUserById);
router.get('/profile', authGuard, roleGuard('client'), getClientProfile);
router.put('/update/profile', authGuard, roleGuard('client'), updateClientProfile);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);


export default router;