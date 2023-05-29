const Comments = require('../Models/comments.models')
module.exports.commentsController = {
    getComments:async (req, res) => {
        try {const showComments = await  Comments.find()
            res.json(showComments)}
            catch(err){res.json(err)}
    },

    getCommentsOneNew:async (req, res) =>{
        const commentsNew = await Comments.find({_newsId:req.params.id})
         res.json(commentsNew) },

    postComments: (req, res) => {
        Comments.create({
            nameCom: req.body.nameCom,
            textCom: req.body.textCom,
            _newsId: req.body._newsId
        })
            .then(() => {
                res.json('Добавление коммента')
            })
    },

  

    deleteComments: async (req, res) => {
       await Comments.findOneAndRemove(
            req.params.id
        ), res.json(`удаление коммента с ID ${req.params.id}`)
    },
    patchComments: (req, res) => {
        res.json("Изменение коммента")
    }
}