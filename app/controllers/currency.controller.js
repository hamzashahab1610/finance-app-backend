const Currencies = require("../models/currency.model.js");

// Create and Save a new Currencies
exports.create = (req, res) => {
	// Create a Currencies
	const currency = new Currencies({
		currency_id: req.body.currency_id,
		exchange_rate: req.body.exchange_rate,
		base: req.body.base,
	});

	// Save Currencies in the database
	currency
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Currencies.",
			});
		});
};

// Retrieve and return all Currencies from the database.
exports.findAll = async (req, res) => {
	let allCurrencies = await Currencies.find();

	res.send(allCurrencies);
};

// Find a single currency with a currencyId
exports.findOne = (req, res) => {
	Currencies.findById(req.params.currencyId)
		.then((currency) => {
			if (!currency) {
				return res.status(404).send({
					message:
						"Currencies not found with id " + req.params.currencyId,
				});
			}
			res.send(currency);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Currencies not found with id " + req.params.currencyId,
				});
			}
			return res.status(500).send({
				message:
					"Error retrieving currency with id " +
					req.params.currencyId,
			});
		});
};

// Update a currency identified by the currencyId in the request
exports.update = (req, res) => {
	// Find currency and update it with the request body
	Currencies.findByIdAndUpdate(
		req.params.currencyId,
		{
			currency_id: req.body.currency_id,
			exchange_rate: req.body.exchange_rate,
			base: req.body.base,
		},
		{ new: true },
	)
		.then((currency) => {
			if (!currency) {
				return res.status(404).send({
					message:
						"Currencies not found with id " + req.params.currencyId,
				});
			}
			res.send(currency);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message:
						"Currencies not found with id " + req.params.currencyId,
				});
			}
			return res.status(500).send({
				message:
					"Error updating currency with id " + req.params.currencyId,
			});
		});
};

// Delete a currency with the specified currencyId in the request
exports.delete = (req, res) => {
	Currencies.findByIdAndRemove(req.params.currencyId)
		.then((currency) => {
			if (!currency) {
				return res.status(404).send({
					message:
						"Currencies not found with id " + req.params.currencyId,
				});
			}
			res.send({ message: "Currencies deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message:
						"Currencies not found with id " + req.params.currencyId,
				});
			}
			return res.status(500).send({
				message:
					"Could not delete currency with id " +
					req.params.currencyId,
			});
		});
};
