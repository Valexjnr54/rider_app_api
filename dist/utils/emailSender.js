"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendReject = exports.sendApproval = exports.sendProposal = exports.sendDeliveryRequest = exports.sendWelcomeEmail = void 0;
// src/utils/emailSender.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const transporter = nodemailer_1.default.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "878bb3a017cf53",
        pass: "14828d67fa4817"
    }
});
async function sendWelcomeEmail(email, fullname) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/welcome.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    //   const template = await ejs.renderFile(templatePath, { fullname, email: email });
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { fullname, email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendWelcomeEmail = sendWelcomeEmail;
async function sendDeliveryRequest(email, rider, deliveryDetail) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/delivery.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { deliveryDetail: deliveryDetail, rider: rider, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendDeliveryRequest = sendDeliveryRequest;
async function sendProposal(email, proposal) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/proposal.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { proposal: proposal, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendProposal = sendProposal;
async function sendApproval(email, deliveryDetail) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/approve.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { deliveryDetail: deliveryDetail, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendApproval = sendApproval;
async function sendReject(email, deliveryDetail) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/reject.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'info@riderapp.com',
        to: email,
        subject: 'Welcome to Riders App',
        html: ejs_1.default.render(template, { deliveryDetail: deliveryDetail, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendReject = sendReject;
