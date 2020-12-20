const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HzszoJ1MyPMFpzyyEX382XBvSm6LflSog5y2tJ3bb2Zb0WqVT3glb50zHFakDhFofakid73V4Ok2ldCirMIowOr00lh19qJtR')

// API

// APP CONFIG
const app = express()

// MIDDLEWARES
app.use(cors({ origin: true }))
app.use(express.json())

// API ROUTES
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total
    console.log('Payment Request ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    })

    response.status(200).send({
        clientSecret: paymentIntent.client_secret
    })
})

// LISTEN COMMAND
exports.api = functions.https.onRequest(app)


// http://localhost:5001/clone-21b8c/us-central1/api