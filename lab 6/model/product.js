const products = [];
const getDb = require('../util/database').getDb;
const ObjectId = require('mongodb').ObjectId;
class Product {
    constructor(id, title, brand, price, image, description) {
        this._id = id;
        this.title = title;
        this.brand = brand;
        this.price = price;
        this.image = image;
        this.description = description;
    }
    save() {
        // this.id = Math.floor(Math.random() * 1000000);
        // products.push(this);
        const db = getDb();
        db.collection('Product')
            .insertOne(this)
            .then(result => {
                console.log(result.result);
            })
            .catch(err => console.log(err));

    }
    static findAll() {
        const db = getDb();
        return db.collection('Product')
            .find()
            .toArray();
        // .then(result => {
        //     console.log(products);

        // })
        //.catch(err => console.log(err));
    }
    static findById(prodId) {
        // return products.filter(p => p.id == prodId);
        const db = getDB();
        return db.collection('products')
            .findOne({ _id: new ObjectId(prodId) });

    }
    update() {
        const db = getDB();
        return db.collection('products')
            .updateOne({ _id: new ObjectId(this._id) }, {
                $set: {
                    title: this.title,
                    price: this.price,
                    imageURL: this.imageURL,
                    description: this.description
                }
            });
    }
    static deleteById(prodId) {
        const db = getDB();
        return db.collection('products')
            .remove({ _id: new ObjectId(prodId) });
    }

    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }
}
module.exports = Product;