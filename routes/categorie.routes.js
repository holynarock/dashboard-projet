const router = require('express').Router();
const categorieController = require('../controllers/categorie.controller');

router.get('/', categorieController.getAllCategories);
router.post('/', categorieController.createCategorie);
router.put('/:id', categorieController.updateCategorie);
router.delete('/:id', categorieController.deleteCategorie);

module.exports = router;

