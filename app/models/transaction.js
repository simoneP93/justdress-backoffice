var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Transactionchema = new Schema({
    tipologia: String

});

module.exports = mongoose.model('Transaction', TransactionSchema);