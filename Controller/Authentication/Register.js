import User from '../../Model/User.js'; // Adjust the import path as necessary
import { sendEmail } from '../../Services/MailService.js'; // Adjust the import path as necessary

export async function UserRegister(req, res) {
    try {
        const { username, email, password, role, age, userLastName } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const newUser = new User({ username, email, password, role, age, userLastName, verificationCode, createdAt: new Date() });
        await newUser.save();

        // Send verification email
        await sendEmail(username, email, 'Registration Verification Code', 'Please verify your email address.', verificationCode);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}