const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
	{
		transaction_id: String,
		date: String,
		account_id: Number,
		ref_1: String,
		ref_2: String,
		account_name: String,
		type: String,
		amount: String,
		currency: String,
		usd: String,
		notes: String,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Transaction", TransactionSchema);
