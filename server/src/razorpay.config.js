import Razorpay from "razorpay";

const razorpayKey = process.env.RAZORPAY_KEY_ID;
const razorpaySecret = process.env.RAZORPAY_SECRET_KEY;

export const razorpay = new Razorpay({
  key_id: 'rzp_test_mGKdNrKBsxcHmC',
  key_secret: 'poAZ8QO2dAPWig1QKoJxDOpX',
});


