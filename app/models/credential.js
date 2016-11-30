var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CredentialSchema = new Schema({
    username: String,
    password: String,
    token: String,

});

module.exports = mongoose.model('Credential', Credentialchema);