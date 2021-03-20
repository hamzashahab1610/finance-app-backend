const Transactions = require("../models/transaction.model.js");

// Create and Save a new Transactions
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Transactions content can not be empty",
	// 	});
	// }

	// Create a Transactions
	const transaction = new Transactions({
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
