const mongoose = require("mongoose");

const CurrencySchema = mongoose.Schema(
	{
		currency_id: String,
		exchange_rate: Number,
		base: Boolean,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Currency", CurrencySchema);
