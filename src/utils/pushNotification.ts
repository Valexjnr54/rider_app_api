import * as admin from 'firebase-admin';

var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to send push notification
export async function sendDeliveryPushNotification(token: string, title: string, body: string, delivery_id: number) {
    try {
      const message = {
        token: token,
        notification: {
          title,
          body
        },
        data:{
          delivery_id:delivery_id.toString()
        }
      };
  
      const response = await admin.messaging().send(message);
      console.log('Successfully sent message:', response);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }