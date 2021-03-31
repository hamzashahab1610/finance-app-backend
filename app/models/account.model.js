const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema(
	{
		account_id: String,
		account_name: String,
		balance: Number,
		current: Number,
		over_30: Number,
		over_60: Number,
		over_90: Number,
		over_120: Number,
		balance_details: Array,
	},
	{
		timestamps: true,
	},
);

module.exports = mongoose.model("Account", AccountSchema);
