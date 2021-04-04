module.exports = (app) => {
	const activities = require("../controllers/activity.controller.js");

	// Retrieve all Notes
	app.get("/api/activities", activities.findAll);
};
