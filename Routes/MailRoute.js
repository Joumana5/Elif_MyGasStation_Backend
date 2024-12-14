import express from 'express';
import { sendEmail } from '../Services/MailService.js';

const router = express.Router();

router.post('/send', async (req, res) => {
    const { to, subject, text } = req.body;
    try {
        await sendEmail(to, subject, text);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
});

export default router;