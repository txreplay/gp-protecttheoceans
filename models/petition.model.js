const mongoose = require('mongoose');

const petitionSchema = new mongoose.Schema({
    email: String,
    firstname: String,
    lastname: String,
    postalCode: String,
}, {timestamps: true});

module.exports = mongoose.model('Petition', petitionSchema);
