const router = require('express').Router();
const produitController = require('../controllers/produit.controller');
const multer = require('multer');
const upload = multer();

router.get('/', produitController.getAllProduits);
router.post('/', upload.single("file"),produitController.createProduit);
router.put('/:id', produitController.updateProduit);
router.delete('/:id', produitController.deleteProduit);


module.exports = router;
