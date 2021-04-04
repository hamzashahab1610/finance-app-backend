module.exports = (app) => {
	const accounts = require("../controllers/account.controller.js");

	// Create a new Note
	app.post("/api/accounts", accounts.create);

	// Retrieve all Notes
	app.get("/api/accounts", accounts.findAll);

	// Retrieve all Account IDs
	app.get("/api/accountIds", accounts.findAllAccountIds);

	// Retrieve a single Note with accountId
	app.get("/api/accounts/:accountId", accounts.findOne);

	// Update a Note with accountId
	app.patch("/api/accounts/:accountId", accounts.update);

	// Delete a Note with accountId
	app.delete("/api/accounts/:accountId", accounts.delete);
};
