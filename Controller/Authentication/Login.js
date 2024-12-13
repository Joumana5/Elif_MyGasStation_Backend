import JWT from 'jsonwebtoken';
import User from '../../Model/User.js'; // Adjust the import path as necessary

export async function UserLogin(req, res) {
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        if (user) {
            const token = JWT.sign({ id: user.id, role: user.role }, 'secretkey');
            res.status(200).json({
                "message": "user logged",
                "token": token,
                "role": user.role, // Include the user's role in the response
            });
        } else {
            res.status(404).json({ "message": "user not found" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
