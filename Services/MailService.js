import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'asaidi887@gmail.com',
        pass: 'rozc zcnj jbdg bgpj '
    }
});

export const sendEmail = async (name,to, subject, text, verificationCode) => {
    try {
        const templatePath = path.join('views', `index.ejs`);
        const htmlContent = await ejs.renderFile(templatePath, {
            name: name,
            subject: "Registration Verification Code",
            verificationCode: verificationCode
        });

        const mailOptions = {
            from: 'asaidi887@gmail.com',
            to,
            subject,
            text,
            html: htmlContent
        };
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
