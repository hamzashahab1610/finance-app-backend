const mongoose = require("mongoose");

const TransactionIdSchema = mongoose.Schema(
	{
		transaction_id: Number,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Transaction ID", TransactionIdSchema);
