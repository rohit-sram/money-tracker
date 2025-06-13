const mongoose = require('mongoose');
const { Schema, model} = mongoose 
const TransactionScema = new Schema({
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true},
});

// export this
const TransactionModel = model('Transaction', TransactionScema);

module.exports = TransactionModel;