module.exports = (app) => {
	const currencies = require("../controllers/currency.controller.js");

	// Create a new Note
	app.post("/api/currencies", currencies.create);

	// Retrieve all Notes
	app.get("/api/currencies", currencies.findAll);

	// Retrieve a single Note with currencyId
	app.get("/api/currencies/:currencyId", currencies.findOne);

	// Update a Note with currencyId
	app.patch("/api/currencies/:currencyId", currencies.update);

	// Delete a Note with currencyId
	app.delete("/api/currencies/:currencyId", currencies.delete);
};
