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
    const {name, description, datetime} = req.body;
    res.json(req.body);
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});