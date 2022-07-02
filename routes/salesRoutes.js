const express = require('express');

const router = express.Router();

const salesControllers = require('../controllers/salesControllers');
/* const validateProductId = require('../middlewares/validateProductId');
const validateQuantity = require('../middlewares/validateQuantity'); */

router.get('/', salesControllers.getAllSales);
router.get('/:id', salesControllers.getById);
/* router.post('/', validateProductId, validateQuantity, salesControllers.addNewSale); */
module.exports = router;