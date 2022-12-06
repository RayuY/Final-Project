require('dotenv').config();
// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twilioSender = process.env.TWILIO_SENDER;
const twilioReceiver = process.env.TWILIO_RECEIVER

console.log("accSid:", accountSid);
console.log("twiSen:", twilioSender);
console.log("twiRec:", twilioReceiver);

client.messages
  .create({
     body: 'Your reservation has been confirmed. Thanks!',
     from: twilioSender,
     to: twilioReceiver
   })
  .then(message => console.log(message.sid))
  .catch((err) => console.log("Error:", err));
