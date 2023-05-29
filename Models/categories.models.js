const mongoose = require('mongoose');
const categoriesShema = mongoose.Schema({
    name: String
})


const Categorie = mongoose.model('Categorie',categoriesShema);

module.exports = Categorie