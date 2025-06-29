const {model} = require('mongoose');

const {TransactionsSchema} = require('../Schemas/TransactionsSchema');

const TransactionsModel = model('Transactions', TransactionsSchema);

module.exports = {TransactionsModel};