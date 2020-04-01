const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const shopController = require('../controller/shop');

router.get('/', shopController.productDetail);

module.exports = router;