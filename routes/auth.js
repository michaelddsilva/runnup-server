const router = require('express').Router();
const auth = require("../middleware/token");
const validation = require("../middleware/validation/auth");
const controller = require("../controllers/auth");

// Create User
router.post('/users', validation.create, controller.user_create);

// User Creds
router.get('/users', auth.verifyToken, validation.login, controller.user_details);

// Login User
router.post('/users/access-token', validation.login, controller.user_login);

//Logout User
// router.delete('/users/access-token', ); // add controller

// Get all users
router.get('/users/all', controller.user_all);

module.exports = router;

