const express = require('express');
const router = express.Router();
registerController = require('../controllers/registerController');

router.post('/', registerController.handlNewUser);

module.exports = router;