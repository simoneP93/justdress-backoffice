var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    nome: String,
    prezzo: Number,
    descrizione: String,
    quantità: Number,
    // foto: Buffer,
    foto: String,

    categoria: Number,
    sesso: String,

});

module.exports = mongoose.model('Product', ProductSchema);