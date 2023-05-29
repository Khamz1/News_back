const mongoose = require('mongoose')
const News = require('../Models/news.models')
const commentsSchema = mongoose.Schema({
  nameCom: String,
  textCom: String,
  _newsId:{type:mongoose.Schema.Types.ObjectId,ref: 'News'}
})

const Comments  = mongoose.model('Comments', commentsSchema)

module.exports = Comments