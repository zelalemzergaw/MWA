const Product = require('../model/product');
const rootDir = require('../util/path');

const path = require('path');
exports.getProductForm = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    // res.render('add-product.ejs');

}
exports.deletProduct = (req, res, next) => {
    Product.deleteById(res.body.id);
    // res.render('add-product.ejs');
    res.redirect('/');
}
exports.postProductForm = (req, res, next) => {
    console.log(req.body);
    console.log('productlist ..');

    const title = req.body.title;
    const brand = req.body.brand;
    const price = req.body.price;
    const image = req.body.image;
    const description = req.body.description;
    const prod = new Product(null, title, brand, price, image, description);
    prod.save();
    //console.log(Product.findAll());
    res.redirect('/');
}