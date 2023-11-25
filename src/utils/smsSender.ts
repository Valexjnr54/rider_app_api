// src/utils/smsSender.ts
import { Twilio } from 'twilio';
import path from "path";
import fs from 'fs';

const twilioClient = new Twilio(process.env.TWILIO_SID || "ACcaf8d5ccd133dd203e440a59b735d9b7", process.env.TWILIO_AUTH_TOKEN || "0323b28a14f7b40e1eeb0706710d0a33");

export async function sendWelcomeSMS(phoneNumber: string, fullname: string, email: string) {
  // Load the SMS template
  const templatePath = path.join(__dirname, '../templates/sms-templates/welcome.txt');
  const template = fs.readFileSync(templatePath, 'utf8');

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
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}
