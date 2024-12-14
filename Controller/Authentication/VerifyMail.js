import User from '../../Model/User.js'; // Adjust the import path as necessary

export async function verifyEmail(req, res) {
    try {
        const { email, verificationCode } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.verificationCode === verificationCode) {
            user.isVerified = true;
            await user.save();
            return res.status(200).json({ message: 'Email verified successfully' });
        } else {
            return res.status(400).json({ message: 'Invalid verification code' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}