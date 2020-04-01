const Product = require('../model/product');
const rootDir = require('../util/path');

const path = require('path');
exports.productDetail = (req, res, next) => {
    Product.findAll()
        .then(products => {
            console.log('shop.js', products);
            res.render('shop.ejs', { prod: products });
        })
        .catch(err => console.log(err));

    // const products = Product.findAll();

    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));

}