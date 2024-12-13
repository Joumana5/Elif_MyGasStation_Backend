import User from '../../Model/User.js'; // Adjust the import path as necessary

export async function UserRegister(req, res) {
    try {
        const { username, email, password, role } = req.body;
        const newUser = new User({ username, email, password, role, createdAt: new Date() });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}