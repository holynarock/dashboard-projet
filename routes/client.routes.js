const router = require('express').Router();
const clientController = require('../controllers/client.controller');

router.get('/', clientController.readClient);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;

