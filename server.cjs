require("dotenv").config();

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
  [1, {price: 4999, name: "Katana knives - set of 3"}]
])

// Fetch the publishable key to initialize Stripe.js
fastify.get("/publishable-key", () => {
  return { publishable_key: process.env.STRIPE_PUBLISHABLE_KEY };
});

// Create a payment intent and return its client secret
fastify.post("/create-payment-intent", async (req, res) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,

    currency: "usd",
    payment_method_types: ["card"],
  });

  return { client_secret: paymentIntent.client_secret };
});

// Run the server
const start = async () => {
  try {
    await fastify.listen({ port: 5252 });
    console.log("Server listening ... ");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
