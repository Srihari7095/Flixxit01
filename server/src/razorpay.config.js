import Razorpay from "razorpay";

const razorpay = require('razorpay');
const razorpayKey = process.env.RAZORPAY_KEY_ID;
const razorpaySecret = process.env.RAZORPAY_SECRET_KEY;

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

