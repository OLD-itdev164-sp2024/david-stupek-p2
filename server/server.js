const express = require('express');
const cors = require('cors');
require('dotenv').config();
const paypal = require('@paypal/checkout-server-sdk');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Paypal route
function environment() {
    const clientID = process.env.PAYPAL_CLIENT_ID;
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

    return new paypal.core.SandboxEnvironment(clientId, clientSecret);
}

function client() {
    return new paypal.core.PayPalHttpClient(environment());
}

app.get('/paypal-test', async (req, res) => {
    try {
        const request = new paypal.orders.OrdersCreateRequest();
        request.prefer("return=representation");
        request.requestbody({
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: '100.00'
                }
            }]
        });

        const createOrder = await client().execute(request);
        res.json({ id: createOrder.result.id });
    } catch (error) {
        res.status(500).send(error.message);
    }
});


// default route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
