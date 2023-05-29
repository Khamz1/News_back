const {Router} = require('express');
const router = Router();
const {commentsController} = require('../controllers/comments.controllers')


router.get('/comments',commentsController.getComments);
router.get('/comments/news/:id',commentsController.getCommentsOneNew)
router.post('/comments',commentsController.postComments);
router.delete('/comments/:id',commentsController.deleteComments);
router.patch('/comments/:id',commentsController.patchComments);

module.exports=router