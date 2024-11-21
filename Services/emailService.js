import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'hamdijbeli1920@gmail.com', 
        pass: 'ugxn wvaj gayv twfm' 
    }
});

export const sendEmail = async (to, subject, text) => {
    try {

        const templatePath = path.join('view', `index.ejs`);
        const htmlContent = await ejs.renderFile(templatePath, {
            name: "hamdi", subject: "verif code", verificationCode: "5847"
        });

        const mailOptions = {
            from: 'hamdijbeli1920@gmail.com', 
            to,
            subject, 
            text,
            html: htmlContent
        };
        await transporter.sendMail(mailOptions);
        console.log('Email envoyé avec succès.');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email :', error);
    }
};
