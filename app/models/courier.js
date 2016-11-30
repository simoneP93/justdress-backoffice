var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourierSchema = new Schema({
    data: Date

});

module.exports = mongoose.model('Courier', CourierSchema);