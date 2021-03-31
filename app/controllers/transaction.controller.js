const Transactions = require("../models/transaction.model.js");
const Accounts = require("../models/account.model.js");

// Create and Save a new Transactions
exports.create = async (req, res) => {
	// Create a Transactions
	var transaction = new Transactions({
		transaction_id: req.body.transaction_id,
		date: req.body.date,
		account_id: req.body.account_id,
		ref_1: req.body.ref_1,
		ref_2: req.body.ref_2,
		account_name: req.body.account_name,
		type: req.body.type,
		amount: req.body.amount,
		currency: req.body.currency,
		usd: req.body.usd,
		notes: req.body.notes,
	});

	// Save Transactions in the database
	transaction
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Transactions.",
			});
		});
};

// Retrieve and return all Transactions from the database.
exports.findAll = async (req, res) => {
	let allTransactions = await Transactions.find();
	let allAccounts = await Accounts.find();

	//Sorts objects into ascending order of dates
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
	});

	res.send(allTransactions);
};

function getDate(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Find all transactions with an accountid
exports.findAllByAccountId = async (req, res) => {
	if (req.body.startDate || req.body.endDate) {
		var startDate = new Date(req.body.startDate);
		var endDate = new Date(req.body.endDate);
	}

	let allTransactions = await Transactions.find({
		account_id: req.body.accountId,
	});

	var result = allTransactions;

	if (startDate || endDate)
		result = allTransactions.filter(function (x) {
			return (
				getDate(x.date) >= getDate(startDate) &&
				getDate(x.date) <= getDate(endDate)
			);
		});

	res.send(result);
};

// Find a single transaction with a transactionId
exports.findOne = (req, res) => {
	Transactions.findById(req.params.transactionId)
		.then((transaction) => {
			if (!transaction) {
				return res.status(404).send({
					message:
						"Transactions not found with id " +
						req.params.transactionId,
				});
			}
			res.send(transaction);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Transactions not found with id " +
						req.params.transactionId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving transaction with id " +
					req.params.transactionId,
			});
		});
};

// Update a transaction identified by the transactionId in the request
exports.update = (req, res) => {
	Transactions.findByIdAndUpdate(
		req.params.transactionId,
		{
			transaction_id: req.body.transaction_id,
			date: req.body.date,
			account_id: req.body.account_id,
			ref_1: req.body.ref_1,
			ref_2: req.body.ref_2,
			account_name: req.body.account_name,
			type: req.body.type,
			amount: req.body.amount,
			currency: req.body.currency,
			usd: req.body.usd,
			notes: req.body.notes,
		},
		{ new: true },
	)
		.then((transaction) => {
			if (!transaction) {
				return res.status(404).send({
					message:
						"Transactions not found with id " +
						req.params.transactionId,
				});
			}
			res.send(transaction);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Transactions not found with id " +
						req.params.transactionId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating transaction with id " +
					req.params.transactionId,
			});
		});
};

// Delete a transaction with the specified transactionId in the request
exports.delete = (req, res) => {
	Transactions.findByIdAndRemove(req.params.transactionId)
		.then((transaction) => {
			if (!transaction) {
				return res.status(404).send({
					message:
						"Transactions not found with id " +
						req.params.transactionId,
				});
			}
			res.send({ message: "Transactions deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Transactions not found with id " +
						req.params.transactionId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete transaction with id " +
					req.params.transactionId,
			});
		});
};
