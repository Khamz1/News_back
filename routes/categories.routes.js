const {Router} = require('express');
const route = Router();
const {categorieController} = require('../controllers/categories.controllers');

route.get('/categories',categorieController.getCategorie);
route.post('/categories',categorieController.postCategorie);
route.delete('/categories/:id',categorieController.deleteCategorie);
route.patch('/categories/:id',categorieController.patchCategorie);

module.exports=route