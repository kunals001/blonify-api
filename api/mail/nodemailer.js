import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_API_KEY,
    },
});

export default transporter;