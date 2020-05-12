const router = require('express').Router();
const auth = require("../middleware/token");
const validation = require("../middleware/validation/auth");
const controller = require("../controllers/auth");

// Create User
router.post('/api/v1/users', validation.create, controller.user_create);

// User Creds
router.get('/api/v1/users', auth, validation.login, controller.user_details);

// Login User
router.post('/api/v1/users/access-token', validation.login, controller.user_login);

//Logout User
router.delete('/api/v1/routes/access-token');
