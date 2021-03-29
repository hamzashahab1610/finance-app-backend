const Accounts = require("../models/account.model.js");

// Create and Save a new Accounts
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Accounts content can not be empty",
	// 	});
	// }

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
exports.findAll = (req, res) => {
	var total_balance = 0;
	var total_current = 0;
	var total_over_30 = 0;
	var total_over_60 = 0;
	var total_over_90 = 0;
	var total_over_120 = 0;

	Accounts.find()
		.then((Accounts) => {
			Accounts.map((account) => {
				total_balance = total_balance + account.balance;
				total_current = total_current + account.current;
				total_over_30 = total_over_30 + account.over_30;
				total_over_60 = total_over_60 + account.over_60;
				total_over_90 = total_over_90 + account.over_90;
				total_over_120 = total_over_120 + account.over_120;
			});
			Accounts.push({
				account_name: "ALL ACCOUNTS",
				balance: total_balance,
				current: total_current,
				over_30: total_over_30,
				over_60: total_over_60,
				over_90: total_over_90,
				over_120: total_over_120,
			});
			res.send(Accounts);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while retrieving Accounts.",
			});
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
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Accounts content can not be empty",
	// 	});
	// }

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
