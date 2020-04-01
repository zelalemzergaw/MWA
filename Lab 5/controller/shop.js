const Product = require('../model/product');
const rootDir = require('../util/path');

const path = require('path');
exports.productDetail = (req, res, next) => {
    const products = Product.findAll();
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop.ejs', { prod: products });
}