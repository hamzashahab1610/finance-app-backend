const Accounts = require("../models/account.model.js");
const Transactions = require("../models/transaction.model.js");

// Retrieve and return all Activity from the database.
exports.findAll = async (req, res) => {
	let allAccounts = await Accounts.find();
	let allTransactions = await Transactions.find();
	var activityArr = [];

	allTransactions.sort(function (a, b) {
		return new Date(a.date) - new Date(b.date);
	});

	allAccounts.forEach((account) => {
		var credits = [];
		var payments = [];
		var invoices = [];
		var adjustments = [];

		allTransactions.forEach((transaction, i) => {
			if (account.account_id === transaction.account_id) {
				if (transaction.type === "Credit") credits.push(transaction);
				if (transaction.type === "Invoice") invoices.push(transaction);
				if (transaction.type === "Payment") payments.push(transaction);
				if (transaction.type === "Adjustment")
					adjustments.push(transaction);
			}
		});

		console.log("payments", payments);

		activityArr.push({
			account_id: account.account_id,
			credit_date: credits.length > 0 && credits[credits.length - 1].date,
			payment_date:
				payments.length > 0 && payments[payments.length - 1].date,
			invoice_date:
				invoices.length > 0 && invoices[invoices.length - 1].date,
			adjustment_date:
				adjustments.length > 0 &&
				adjustments[adjustments.length - 1].date,
		});
	});

	res.send(activityArr);
};
