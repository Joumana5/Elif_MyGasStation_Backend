import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/AuthRoute.js';
import managerRoutes from './routes/ManagerRoute.js';
import mailRoutes from './routes/MailRoute.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/androidDB')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

app.use('/auth', authRoutes);
app.use('/manager', managerRoutes);
app.use('/mail', mailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});