const Transactions = require("../models/transaction.model.js");
const Accounts = require("../models/account.model.js");

const updateBalance = async (
	account_id,
	transaction_type,
	transaction_amount,
) => {
	var x;
	const balance = await Accounts.find(
		{ account_id: account_id },
		function (err, result) {
			if (err) throw err;
			Accounts.update(
				{ account_id: account_id },
				{
					balance:
						transaction_type === "Invoice"
							? result[0].balance + parseFloat(transaction_amount)
							: transaction_type === "Credit" ||
							  transaction_type === "Payment"
							? result[0].balance - parseFloat(transaction_amount)
							: result[0].balance +
							  parseFloat(transaction_amount),
				},
			).exec();
			x =
				transaction_type === "Invoice"
					? result[0].balance + parseFloat(transaction_amount)
					: transaction_type === "Credit" ||
					  transaction_type === "Payment"
					? result[0].balance - parseFloat(transaction_amount)
					: result[0].balance + parseFloat(transaction_amount);
		},
	).then(() => {
		console.log("x", x);
		return x;
	});
	console.log("balance", balance);
	return balance;
};

// Create and Save a new Transactions
exports.create = async (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Transactions content can not be empty",
	// 	});
	// }

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
		balance: await updateBalance(
			req.body.account_id,
			req.body.type,
			req.body.amount,
		),
	});

	console.log("transaction", transaction);

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
exports.findAll = (req, res) => {
	Transactions.find()
		.then((Transactions) => {
			res.send(Transactions);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Transactions.",
			});
		});
};

function getDate(date) {
	return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// Find all transactions with an accountid
exports.findAllByAccountId = (req, res) => {
	Transactions.find({ account_id: req.body.accountId })
		.then((transaction) => {
			if (!transaction) {
				return res.status(404).send({
					message:
						"Transactions not found with id " +
						req.params.accountId,
				});
			}

			var startDate = new Date(req.body.startDate);
			var endDate = new Date(req.body.endDate);

			var result = transaction.filter(function (x) {
				return (
					getDate(x.date) >= getDate(startDate) &&
					getDate(x.date) <= getDate(endDate)
				);
			});

			console.log("result", result);
			console.log("startDate", getDate(startDate));
			console.log("endDate", getDate(endDate));

			res.send(result);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Transactions not found with id " + req.body.accountId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving transaction with id " +
					req.body.accountId,
			});
		});
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
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Transactions content can not be empty",
	// 	});
	// }

	// Find transaction and update it with the request body

	updateBalance(req.body.account_id, req.body.type, req.body.amount);

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
