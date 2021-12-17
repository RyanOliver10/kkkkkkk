const router  = require('express').Router()
const homeController = require('../controllers/home');

//rota principal
router.get('/', homeController.paginaInicial);

//rota para contato
router.get('/contato', homeController.contato);
router.get('/sobre', homeController.paginaSobre);
module.exports = router;