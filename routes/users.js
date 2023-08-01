const express = require('express');
const usercontroller = require('../controllers/usercontroller');
const router = express.Router();

router.get('/',usercontroller.getAllUsers);

router.get('/:id',usercontroller.getUser);

module.exports = router;
