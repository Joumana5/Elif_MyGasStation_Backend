import express from 'express';
import mongoose from 'mongoose';
import { authGuard, roleGuard, redirectBasedOnRole } from './Middleware/AuthMiddleware.js';
import { UserLogin } from './Controller/Authentication/Login.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/androidDB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

app.post('/login', UserLogin);

app.get('/dashboard', authGuard, redirectBasedOnRole);

app.get('/employee', authGuard, roleGuard('employee'), (req, res) => {
    res.send('Welcome Employee');
});

app.get('/manager', authGuard, roleGuard('manager'), (req, res) => {
    res.send('Welcome Manager');
});

app.listen(3000, () => {
    console.log('Server started on port 3000!');
});