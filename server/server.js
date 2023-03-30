require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 49.99, name: "Set of 3" }],
    [2, { priceInCents: 69.99, name: "Set of 5" }],
    [3, { priceInCents: 89.99, name: "Set of 8" }]
])

app.post("/create-checkout-session", async (req, res) => {
    res.json({ url: "Hi" })
})

app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: storeItem.name
                        },
                        unit_amount: storeItem.priceInCents
                    },
                    quantity: item.quantity
                }
            }),
            //success_url: `${process.env.CLIENT_URL}/success.html`,
            success_url: `${process.env.CLIENT_URL}/index.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html` // here I can send to cart page again
        })
        res.json({ url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

app.listen(5173)