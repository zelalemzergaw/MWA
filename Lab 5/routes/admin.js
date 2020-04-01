const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminController = require('../controller/admin');
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);

router.get('/add-product', adminController.getProductForm);

router.post('/add-product', adminController.postProductForm);

router.post('/delete-products', adminController.deletProduct);

module.exports = router;