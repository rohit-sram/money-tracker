const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();
const Transaction = require("./models/Transaction.js");
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

app.get('/api/test', (req , res) => {
    res.json({body: 'test OK7'});
});

app.post('/api/transaction', async (req, res) => {   // await reuqires 'async'
    // console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL)
    const {name, description, datetime, price} = req.body;
    const transaction = await Transaction.create({name, description, datetime, price});
    // res.json(req.body);
    res.json(transaction);
});

app.get('/api/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();  // no parameters here means - we are getting all transactions
    res.json(transactions);
})

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});