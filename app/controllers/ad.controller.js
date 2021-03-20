const Ads = require("../models/ad.model.js");

// Create and Save a new Ads
exports.create = (req, res) => {
	// // Validate request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Ads content can not be empty",
	// 	});
	// }

	// Create a Ads
	const ad = new Ads({
		site: req.body.site,
		ad_type: req.body.ad_type,
		ad_costs: req.body.ad_costs,
		contact_info: req.body.contact_info,
	});

	// Save Ads in the database
	ad.save()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Some error occurred while creating the Ads.",
			});
		});
};

// Retrieve and return all ads from the database.
exports.findAll = (req, res) => {
	Ads.find()
		.then((ads) => {
			res.send(ads);
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while retrieving ads.",
			});
		});
};

// Find a single ad with a adId
exports.findOne = (req, res) => {
	Ads.findById(req.params.adId)
		.then((ad) => {
			if (!ad) {
				return res.status(404).send({
					message: "Ads not found with id " + req.params.adId,
				});
			}
			res.send(ad);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Ads not found with id " + req.params.adId,
				});
			}
			return res.status(500).send({
				message: "Error retrieving ad with id " + req.params.adId,
			});
		});
};

// Update a ad identified by the adId in the request
exports.update = (req, res) => {
	// Validate Request
	// if (!req.body.content) {
	// 	return res.status(400).send({
	// 		message: "Ads content can not be empty",
	// 	});
	// }

	// Find ad and update it with the request body
	Ads.findByIdAndUpdate(
		req.params.adId,
		{
			site: req.body.site,
			ad_type: req.body.ad_type,
			ad_costs: req.body.ad_costs,
			contact_info: req.body.contact_info,
		},
		{ new: true },
	)
		.then((ad) => {
			if (!ad) {
				return res.status(404).send({
					message: "Ads not found with id " + req.params.adId,
				});
			}
			res.send(ad);
		})
		.catch((err) => {
			if (err.kind === "ObjectId") {
				return res.status(404).send({
					message: "Ads not found with id " + req.params.adId,
				});
			}
			return res.status(500).send({
				message: "Error updating ad with id " + req.params.adId,
			});
		});
};

// Delete a ad with the specified adId in the request
exports.delete = (req, res) => {
	Ads.findByIdAndRemove(req.params.adId)
		.then((ad) => {
			if (!ad) {
				return res.status(404).send({
					message: "Ads not found with id " + req.params.adId,
				});
			}
			res.send({ message: "Ads deleted successfully!" });
		})
		.catch((err) => {
			if (err.kind === "ObjectId" || err.name === "NotFound") {
				return res.status(404).send({
					message: "Ads not found with id " + req.params.adId,
				});
			}
			return res.status(500).send({
				message: "Could not delete ad with id " + req.params.adId,
			});
		});
};
