import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/AuthRoute.js';
import managerRoutes from './routes/ManagerRoute.js';
import clientRoutes from './routes/ClientRoute.js';
import locationRoutes from './routes/LocationRoute.js'; // Import the location routes
import mailRoutes from './routes/MailRoute.js'; // Import the mail routes

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
app.use('/client', clientRoutes);
app.use('/location', locationRoutes); // Use the location routes
app.use('/mail', mailRoutes); // Use the mail routes


app.listen(3000, () => {
    console.log('Server started on port 3000!');
});