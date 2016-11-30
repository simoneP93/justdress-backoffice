var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopSchema = new Schema({
    nome: String,
    indirizzo: String,
    email: String

});

module.exports = mongoose.model('Shop', ShopSchema);