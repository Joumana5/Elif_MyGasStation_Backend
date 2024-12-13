// Application_Server/Middleware/AuthMiddleware.js
import JWT from 'jsonwebtoken';
import User from '../Model/User.js'; // Adjust the import path as necessary

export async function authGuard(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Access Denied' });
    }

    try {
        const decoded = JWT.verify(token, 'secretkey');
        const user = await User.findById(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid Token' });
    }
}

export function roleGuard(role) {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ message: 'Access Forbidden' });
        }
        next();
    };
}

export function handleRoleBasedAccess(req, res) {
    if (req.user.role === 'manager') {
        // Handle manager-specific logic
        res.send('Welcome, Manager!');
    } else if (req.user.role === 'client') {
        // Handle client-specific logic
        res.send('Welcome, Client!');
    } else {
        res.status(403).json({ message: 'Access Forbidden' });
    }
}
