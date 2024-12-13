import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/AuthRoute.js';
import managerRoutes from './routes/ManagerRoute.js';
import clientRoutes from './routes/ClientRoute.js';
import mailRoutes from './routes/MailRoute.js';

const app = express();
app.use(express.json());

// Enable CORS for all routes
// app.use(cors({
//     origin: 'http://10.0.2.2:8081'
// }));

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
app.use('/mail', mailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});