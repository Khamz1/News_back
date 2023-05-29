const Categorie = require('../Models/categories.models')
const News = require('../Models/news.models')
module.exports.newsController = {
    getNews: async (req, res) => {
        try {const showNews = await  News.find()
            res.json(showNews)}
            catch(err){res.json(err)}
    },

  getNewsInCategorie: async (req, res) =>{
const newsCat = await News.find({categorie:req.params.id})
 res.json(newsCat) }
,
    getNewsById: async (req, res)=>{
       try {const showNews = await  News.findById(req.params.id)
        res.json(showNews)}
        catch(err){res.json(err)}
    },

    postNews: (req, res) => {
        News.create({
            postName: req.body.postName,
            text: req.body.text,
            _categorieId: req.body._categorieId
        })
            .then(() => {
                res.json('Добавление новости')
            })
    },




    deleteNews: (req, res) => {
        News.findOneAndRemove(
            req.params.id
        ).then(() => { res.json(`удаление новости с ID ${req.params.id}`) })
    },
    patchNews: async (req, res) => {
        try {
            const changNews = await News.findByIdAndUpdate(
                req.params.id,
                { text: req.body.text },
                { new: true });
            res.json(changeNews)
        }
        catch (err) { res.json("error") }
    }
}