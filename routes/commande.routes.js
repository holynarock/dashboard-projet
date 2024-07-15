const router = require('express').Router();
const commandeController = require('../controllers/commande.controller');

router.get('/', commandeController.getAllCommandes);
router.post('/', commandeController.createCommande);
router.put('/:id', commandeController.updateCommande);
router.delete('/:id', commandeController.deleteCommande);

module.exports = router;
