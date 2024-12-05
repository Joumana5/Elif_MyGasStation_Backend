import express from 'express';
import Localization from '../Model/Localization.js';
import User from '../Model/User.js';

const router = express.Router();

router.post('/location', async (req, res) => {
    try {
        const { latitude, longitude } = req.body;
        const userId = req.user.id; // Assuming the user ID is stored in the request object

        const localization = new Localization({
            latitude,
            longitude,
            width: 0, // Set default values for width and height
            height: 0
        });

        await localization.save();

        await User.findByIdAndUpdate(userId, { location: localization._id });

        res.status(200).json({ message: 'Location saved successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;