var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
    data: Date

});

module.exports = mongoose.model('Order', OrderSchema);