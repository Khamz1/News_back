const mongoose = require("mongoose");
const Categorie = require('../Models/categories.models')
const newsSchema = mongoose.Schema({
    postName: String,
    text: String ,
    _categorieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
})

const News = mongoose.model('News', newsSchema)

module.exports = News 