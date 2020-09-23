require('dotenv').config()
const nodemailer = require("nodemailer");
const htmlEmail = require("./email");

const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_SECRET
    }
});

const emailToSend = {
    from: process.env.EMAIL_USER, // sender address
    to: "gabryel.ferreira@hotmail.com",
    subject: `Globo - Email Fera`,
    html: htmlEmail
}

transporter.sendMail(emailToSend, (err, result) => {
    if (err) console.error(err);
    else console.log("Email was sended!");
});
