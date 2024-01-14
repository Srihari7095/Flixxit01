import razorpay from "razorpay";
let razorpay = new Razorpay({
    key: process.env.RAZORPAY_KEY_ID,
    secret: process.env.RAZORPAY_SECRET_KEY
});
razorpay = new Razorpay({
    key: 'newKey',
    secret: 'newSecret'
});


