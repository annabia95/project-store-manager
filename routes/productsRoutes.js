const express = require('express');

const router = express.Router();

const productsControllers = require('../controllers/productsController');
const validateNameProduct = require('../middlewares/validateNameProduct');

router.get('/', productsControllers.getAllProducts);
router.post('/', validateNameProduct, productsControllers.add);
router.get('/:id', productsControllers.getByIdProduct);
router.put('/:id', validateNameProduct, productsControllers.update);
router.delete('/:id', productsControllers.deleteProductId);

module.exports = router; 