const express = require('express');
const router = express.Router();
registerController = require('../controllers/registerController');

router.post('/', registerController.handleNewUser);

module.exports = router;