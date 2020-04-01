const MongoClient = require('mongodb').MongoClient;

let _db;
const mongoConnect = function(callback) {
    MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        .then(client => {
            _db = client.db('Lab6');
            callback();
        })
        .catch(error => {
            console.log(error);
            throw new Error('DB connection failed ....');
        })
}
const getDb = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error('DB connect failed');
    }
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;