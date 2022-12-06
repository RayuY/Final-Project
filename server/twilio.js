
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const twilioSender = process.env.TWILIO_SENDER;
const twilioReceiver = process.env.TWILIO_RECEIVER;

client.messages
  .create({
    body: 'Your reservation has been confirmed. Thanks!',
    from: twilioSender,
    to: twilioReceiver
  })
  .then(message => console.log(message.sid))
  .catch((err) => console.log("Error:", err));
