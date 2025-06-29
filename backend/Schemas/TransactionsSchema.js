const { Schema } = require("mongoose");
mongoose = require("mongoose");
const TransactionsSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  user_profile: {
    type: String,
    required: true,
  },
});

module.exports = { TransactionsSchema };
