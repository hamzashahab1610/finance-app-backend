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

exports.findAllAccountIds = async (req, res) => {
	let allAccounts = await Accounts.find();
	var data = {};

	allAccounts.map((account) => {
		data[`${account.account_id}`] = account.account_id;
	});

	res.send(data);
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

	allAccounts.forEach((account) => {
		allTransactions.forEach((transaction) => {
			if (account.account_id === transaction.account_id) {
				account.transactions.push(transaction);
			}
		});
	});

	allAccounts.map((account) => {
		var current = 0;
		var over_30 = 0;
		var over_60 = 0;
		var over_90 = 0;
		var over_120 = 0;
		var negativeTransactions = 0;

		account.transactions.map((transaction) => {
			var start_date = moment(transaction.date);
			var end_date = moment();

			if (
				transaction.type === "Payment" ||
				transaction.type === "Credit" ||
				transaction.type === "Adjustment"
			) {
				if (
					transaction.type === "Adjustment" &&
					transaction.amount < 0
				) {
					negativeTransactions =
						negativeTransactions - transaction.amount;
				} else if (transaction.type !== "Adjustment")
					negativeTransactions =
						negativeTransactions + transaction.amount;
			}

			if (end_date.diff(start_date, "days") < 30) {
				// if (
				// 	transaction.type === "Payment" ||
				// 	transaction.type === "Credit"
				// ) {
				// 	current = current - transaction.amount;
				// } else
				if (
					transaction.type !== "Payment" &&
					transaction.type !== "Credit"
				)
					current =
						transaction.amount > 0 && current + transaction.amount;
			}
			if (
				end_date.diff(start_date, "days") > 30 &&
				end_date.diff(start_date, "days") < 60
			) {
				// if (
				// 	transaction.type === "Payment" ||
				// 	transaction.type === "Credit"
				// ) {
				// 	over_30 = over_30 - transaction.amount;
				// } else
				if (
					transaction.type !== "Payment" &&
					transaction.type !== "Credit"
				)
					over_30 =
						transaction.amount > 0 && over_30 + transaction.amount;
			}
			if (
				end_date.diff(start_date, "days") > 60 &&
				end_date.diff(start_date, "days") < 90
			) {
				// if (
				// 	transaction.type === "Payment" ||
				// 	transaction.type === "Credit"
				// ) {
				// 	over_60 = over_60 - transaction.amount;
				// } else
				if (
					transaction.type !== "Payment" &&
					transaction.type !== "Credit"
				)
					over_60 =
						transaction.amount > 0 && over_60 + transaction.amount;
			}

			if (
				end_date.diff(start_date, "days") > 90 &&
				end_date.diff(start_date, "days") < 120
			) {
				// if (
				// 	transaction.type === "Payment" ||
				// 	transaction.type === "Credit"
				// ) {
				// 	over_90 = over_90 - transaction.amount;
				// } else
				if (
					transaction.type !== "Payment" &&
					transaction.type !== "Credit"
				)
					over_90 =
						transaction.amount > 0 && over_90 + transaction.amount;
			}

			if (end_date.diff(start_date, "days") > 120) {
				// if (
				// 	transaction.type === "Payment" ||
				// 	transaction.type === "Credit"
				// ) {
				// 	over_120 = over_120 - transaction.amount;
				// } else
				if (
					transaction.type !== "Payment" &&
					transaction.type !== "Credit"
				)
					over_120 =
						transaction.amount > 0 && over_120 + transaction.amount;
			}
		});

		account.current = current;
		account.over_30 = over_30;
		account.over_60 = over_60;
		account.over_90 = over_90;
		account.over_120 = over_120;
		account.negativeTransactions = negativeTransactions;
	});

	allAccounts.map((account) => {
		if (account.over_120 < account.negativeTransactions) {
			var x = account.over_120;
			account.over_120 = 0;
			account.negativeTransactions = account.negativeTransactions - x;
		} else if (account.over_120 > account.negativeTransactions) {
			account.over_120 = account.over_120 - account.negativeTransactions;
			account.negativeTransactions = 0;
		}

		if (account.over_90 < account.negativeTransactions) {
			var x = account.over_90;
			account.over_90 = 0;
			account.negativeTransactions = account.negativeTransactions - x;
		} else if (account.over_90 > account.negativeTransactions) {
			account.over_90 = account.over_90 - account.negativeTransactions;
			account.negativeTransactions = 0;
		}

		if (account.over_60 < account.negativeTransactions) {
			var x = account.over_60;
			account.over_60 = 0;
			account.negativeTransactions = account.negativeTransactions - x;
		} else if (account.over_60 > account.negativeTransactions) {
			account.over_60 = account.over_60 - account.negativeTransactions;
			account.negativeTransactions = 0;
		}

		if (account.over_30 < account.negativeTransactions) {
			var x = account.over_30;
			account.over_30 = 0;
			account.negativeTransactions = account.negativeTransactions - x;
		} else if (account.over_30 > account.negativeTransactions) {
			account.over_30 = account.over_30 - account.negativeTransactions;
			account.negativeTransactions = 0;
		}

		account.current = account.current - account.negativeTransactions;
		account.negativeTransactions =
			account.negativeTransactions - account.current;
	});

	allAccounts.map((account) => {
		account.balance =
			account.current +
			account.over_30 +
			account.over_60 +
			account.over_90 +
			account.over_120;
	});

	allAccounts.map((account) => {
		total_balance = total_balance + account.balance;
		total_current = total_current + account.current;
		total_over_30 = total_over_30 + account.over_30;
		total_over_60 = total_over_60 + account.over_60;
		total_over_90 = total_over_90 + account.over_90;
		total_over_120 = total_over_120 + account.over_120;
	});

	allAccounts.push({
		account_name: "All Accounts",
		balance: total_balance,
		current: total_current,
		over_30: total_over_30,
		over_60: total_over_60,
		over_90: total_over_90,
		over_120: total_over_120,
	});

	res.send({
		allAccounts,
		// total: {
		// 	account_name: "All Accounts",
		// 	balance: total_balance,
		// 	current: total_current,
		// 	over_30: total_over_30,
		// 	over_60: total_over_60,
		// 	over_90: total_over_90,
		// 	over_120: total_over_120,
		// },
	});
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
			// balance: req.body.balance,
			// current: req.body.current,
			// over_30: req.body.over_30,
			// over_60: req.body.over_60,
			// over_90: req.body.over_90,
			// over_120: req.body.over_120,
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
