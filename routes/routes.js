const router = require('express').Router();
const auth = require("../middleware/token");
const validation = require("../middleware/validation/routes");
const controller = require("../controllers/routes");

// Create Route
router.post('/routes', auth, validation, controller.route_create);

// Get Routes
router.get('/routes', auth, controller.route_findByUserID);

// Get Route Details
router.get('/routes/:_id', auth, controller.route_details);

// Update Route
router.put('/routes/:_id', auth, validation, controller.route_update);

// Delete Route
router.delete('/routes/:_id', auth, controller.route_delete);

module.exports = router;


