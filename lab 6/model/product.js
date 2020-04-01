const products = [];
class Product {
    constructor(id, title, brand, price, image, description) {
        this.id = id;
        this.title = title;
        this.brand = brand;
        this.price = price;
        this.image = image;
        this.description = description;
    }
    save() {
        this.id = Math.floor(Math.random() * 1000000);
        products.push(this);
    }
    static findAll() {
        return products;
    }
    static deleteById(prodId) {
        const deleteProductIndex = products.findIndex(p => p.id == prodId);
        products.splice(deleteProductIndex, 1);
    }
}
module.exports = Product;