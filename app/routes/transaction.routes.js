module.exports = (app) => {
	const transactions = require("../controllers/transaction.controller.js");

	// Create a new Note
	app.post("/api/transactions", transactions.create);

	// Retrieve all Notes
	app.get("/api/transactions", transactions.findAll);

	// Retrieve a single Note with transactionId
	app.get("/api/transactions/:transactionId", transactions.findOne);

	// Update a Note with transactionId
	app.patch("/api/transactions/:transactionId", transactions.update);

	// Delete a Note with transactionId
	app.delete("/api/transactions/:transactionId", transactions.delete);
};
