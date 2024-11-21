import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/AuthRoute.js';
import managerRoutes from './routes/ManagerRoute.js';
import clientRoutes from './routes/ClientRoute.js';

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
app.post('/send-email', async (req, res) => {
    
    const { to ,subject, text} = req.body;
  
    try {
    
        
        await sendEmail(to, subject, text);

        console.log('Email envoyé avec succès.');

        return res.send("email teb3ath")
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
        return res.send("thama moshkla")
    }
   
    
});

app.listen(3000, () => {
    console.log('Server started on port 3000!');
});