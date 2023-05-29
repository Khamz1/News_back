const Categorie = require('../Models/categories.models')
module.exports.categorieController = {
    getCategorie: (req, res)=>{
        res.json("Категории")
    },
  postCategorie: (req, res) => {
        Categorie.create({
            name:req.body.name
        })
            .then(() => {
                res.json('Добавлена категория')
            })
    },




    deleteCategorie: (req, res)=>{
        Categorie.findOneAndRemove(
            req.params.id
        ).then(() => { res.json(`удаление категории с ID ${req.params.id}`) })
    },
    patchCategorie: (req, res)=>{
        res.json("Категории")
    }
}