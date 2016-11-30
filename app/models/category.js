var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    data: Date

});

module.exports = mongoose.model('Category', CategorySchema);