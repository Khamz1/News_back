const {Router} = require('express');
const route = Router();
const {newsController} = require('../controllers/news.controllers');

route.get('/news',newsController.getNews);
route.get('/news/:id',newsController.getNewsById);
route.get('news/categorie/:id',newsController.getNewsInCategorie)
route.post('/news',newsController.postNews);
route.delete('/news/:id',newsController.deleteNews);
route.patch('/news/:id',newsController.patchNews);

module.exports=route