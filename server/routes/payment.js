const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
const stripe = Stripe('your-secret-key-here'); // Replace with your Stripe secret key

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
