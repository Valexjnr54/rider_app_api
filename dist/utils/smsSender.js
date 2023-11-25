"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWelcomeSMS = void 0;
// src/utils/smsSender.ts
const twilio_1 = require("twilio");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const twilioClient = new twilio_1.Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
async function sendWelcomeSMS(phoneNumber, fullname, email) {
    // Load the SMS template
    const templatePath = path_1.default.join(__dirname, '../templates/sms-templates/welcome.txt');
    const template = fs_1.default.readFileSync(templatePath, 'utf8');
    // Replace placeholders with dynamic content
    const smsMessage = template
        .replace('{{fullname}}', fullname)
        .replace('{{email}}', email);
    try {
        await twilioClient.messages.create({
            to: phoneNumber,
            from: process.env.TWILIO_PHONE_NUMBER,
            body: smsMessage,
        });
        console.log('SMS sent successfully.');
    }
    catch (error) {
        console.error('Error sending SMS:', error);
    }
}
exports.sendWelcomeSMS = sendWelcomeSMS;
