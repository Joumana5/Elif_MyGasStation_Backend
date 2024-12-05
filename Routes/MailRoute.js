import express from 'express';
import { sendEmail } from '../Services/emailService.js'; // Adjust the import path as necessary

const router = express.Router();

router.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        await sendEmail(to, subject, text);
        console.log('Email sent successfully.');
        return res.send("Email sent successfully");
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).send("There was a problem sending the email");
    }
});

export default router;