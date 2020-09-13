const mongoose = require('mongoose');
const Squema = mongoose.Schema;

const petSquema = new Squema({
    name: String,
    description: String
});

//create model
const Pet = mongoose.model('Pet', petSquema);

module.exports = Pet;