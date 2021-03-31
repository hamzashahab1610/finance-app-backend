const Accounts = require("../models/account.model.js");
const Transactions = require("../models/transaction.model.js");
const moment = require("moment");

// Create and Save a new Accounts
exports.create = (req, res) => {
	// Create a Accounts
	const account = new Accounts({
		account_id: req.body.account_id,
		account_name: req.body.account_name,
		balance: 0,
		current: req.body.current,
		over_30: req.body.over_30,
		over_60: req.body.over_60,
		over_90: req.body.over_90,
		over_120: req.body.over_120,
	});

	// Save Accounts in the database
	account
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Accounts.",
			});
		});
};

// Retrieve and return all Accounts from the database.
exports.findAll = async (req, res) => {
	var total_balance = 0;
	var total_current = 0;
	var total_over_30 = 0;
	var total_over_60 = 0;
	var total_over_90 = 0;
	var total_over_120 = 0;

	let allAccounts = await Accounts.find();
	let allTransactions = await Transactions.find();

	allTransactions.sort(function (a, b) {
		return new Date(a.date) - new Date(b.date);
	});

	var arr = [];

	allAccounts.forEach((account) => {
		var x = [];
		allTransactions.forEach((transaction) => {
			if (account.account_id === transaction.account_id) {
				x.push(transaction);
			}
		});

		arr.push(x);
	});

	console.log("arr", arr);

	let allAccountsWithTransactions = [];

	allAccounts.forEach((account, i) => {
		var initialBalance = arr[i][0] && arr[i][0].amount;

		arr[i].forEach((transaction, j) => {
			if (transaction.account_id === account.account_id) {
				if (j === 0) {
					if (
						transaction.type === "Credit" ||
						transaction.type === "Payment"
					) {
						transaction.balance = -initialBalance;
						initialBalance = -initialBalance;
					} else {
						transaction.balance = initialBalance;
						initialBalance = initialBalance;
					}
				} else {
					if (transaction.type === "Invoice") {
						transaction.balance =
							initialBalance + parseFloat(transaction.amount);
						initialBalance =
							initialBalance + parseFloat(transaction.amount);
					}
					if (
						transaction.type === "Credit" ||
						transaction.type === "Payment"
					) {
						transaction.balance =
							initialBalance - parseFloat(transaction.amount);
						initialBalance =
							initialBalance - parseFloat(transaction.amount);
					}
					if (transaction.type === "Adjustment") {
						transaction.balance =
							initialBalance + parseFloat(transaction.amount);
						initialBalance =
							initialBalance + parseFloat(transaction.amount);
					}
				}
			}
		});

		account.balance = initialBalance;
	});

	allAccounts.forEach((account, i) => {
		allAccountsWithTransactions.push({
			...account._doc,
			balance_details: arr[i].map((transaction) => {
				return { balance: transaction.balance, date: transaction.date };
			}),
		});
	});

	allAccountsWithTransactions.map((account) => {
		var current = 0;
		var over_30 = 0;
		var over_60 = 0;
		var over_90 = 0;
		var over_120 = 0;

		account.balance_details.map((detail) => {
			var start_date = moment(detail.date);
			var end_date = moment();

			if (end_date.diff(start_date, "days") < 30) {
				current = account.balance;
			}
			if (
				end_date.diff(start_date, "days") > 30 &&
				end_date.diff(start_date, "days") < 60
			) {
				over_30 = over_30 + detail.balance;
			}

			if (
				end_date.diff(start_date, "days") > 60 &&
				end_date.diff(start_date, "days") < 90
			) {
				over_60 = over_60 + detail.balance;
			}

			if (
				end_date.diff(start_date, "days") > 90 &&
				end_date.diff(start_date, "days") < 120
			) {
				over_90 = over_90 + detail.balance;
			}

			if (end_date.diff(start_date, "days") > 120) {
				over_120 = over_120 + detail.balance;
			}
		});

		account.current = current;
		account.over_30 = over_30;
		account.over_60 = over_60;
		account.over_90 = over_90;
		account.over_120 = over_120;
	});

	allAccountsWithTransactions.map((account) => {
		total_balance = total_balance + account.balance;
		total_current = total_current + account.current;
		total_over_30 = total_over_30 + account.over_30;
		total_over_60 = total_over_60 + account.over_60;
		total_over_90 = total_over_90 + account.over_90;
		total_over_120 = total_over_120 + account.over_120;
	});

	allAccountsWithTransactions.push({
		account_name: "ALL ACCOUNTS",
		balance: total_balance,
		current: total_current,
		over_30: total_over_30,
		over_60: total_over_60,
		over_90: total_over_90,
		over_120: total_over_120,
	});

	console.log("allAccountsWithTransactions", allAccountsWithTransactions);

	res.send(allAccountsWithTransactions);
};

// Find a single account with a accountId
exports.findOne = (req, res) => {
	Accounts.findById(req.params.accountId)
		.then((account) => {
			if (!account) {
				return res.status(404).send({
					message:
						"Accounts not found with id " + req.params.accountId,
				});
			}
			res.send(account);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Accounts not found with id " + req.params.accountId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving account with id " + req.params.accountId,
			});
		});
};

// Update a account identified by the accountId in the request
exports.update = (req, res) => {
	// Find account and update it with the request body
	Accounts.findByIdAndUpdate(
		req.params.accountId,
		{
			account_id: req.body.account_id,
			account_name: req.body.account_name,
			balance: req.body.balance,
			current: req.body.current,
			over_30: req.body.over_30,
			over_60: req.body.over_60,
			over_90: req.body.over_90,
			over_120: req.body.over_120,
		},
		{ new: true },
	)
		.then((account) => {
			if (!account) {
				return res.status(404).send({
					message:
						"Accounts not found with id " + req.params.accountId,
				});
			}
			res.send(account);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Accounts not found with id " + req.params.accountId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating account with id " + req.params.accountId,
			});
		});
};

// Delete a account with the specified accountId in the request
exports.delete = (req, res) => {
	Accounts.findByIdAndRemove(req.params.accountId)
		.then((account) => {
			if (!account) {
				return res.status(404).send({
					message:
						"Accounts not found with id " + req.params.accountId,
				});
			}
			res.send({ message: "Accounts deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Accounts not found with id " + req.params.accountId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete account with id " + req.params.accountId,
			});
		});
};
