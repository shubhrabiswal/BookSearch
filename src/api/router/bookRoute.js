const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController')


router.post('/addapikey',bookController.addapikey)
router.get('/',bookController.getdetails)



module.exports = router;