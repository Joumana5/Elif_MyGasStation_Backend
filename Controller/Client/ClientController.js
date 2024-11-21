import User from '../../Model/User.js'; // Adjust the import path as necessary

export async function getClientProfile(req, res) {
    try {
        const userId = req.user.id; // Assuming the user ID is stored in the request object
        const user = await User.findById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export async function updateClientProfile(req, res) {
    try {
        const userId = req.user.id; // Assuming the user ID is stored in the request object
        const updatedData = req.body;
        const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}