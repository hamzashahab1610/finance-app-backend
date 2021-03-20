module.exports = (app) => {
	const ads = require("../controllers/ad.controller.js");

	// Create a new Note
	app.post("/api/ads", ads.create);

	// Retrieve all Notes
	app.get("/api/ads", ads.findAll);

	// Retrieve a single Note with adId
	app.get("/api/ads/:adId", ads.findOne);

	// Update a Note with adId
	app.patch("/api/ads/:adId", ads.update);

	// Delete a Note with adId
	app.delete("/api/ads/:adId", ads.delete);
};
