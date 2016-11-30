var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    nome: String,
    eta: Number,
    cognome: String,
    indirizzo: String,
    email: String,
    sesso: String,

});

module.exports = mongoose.model('Product', ProductSchema);