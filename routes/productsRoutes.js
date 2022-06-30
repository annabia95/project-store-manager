const express = require('express');

const router = express.Router();

const productsControllers = require('../controllers/productsController');
const validateNameProduct = require('../middlewares/validateNameProduct');

router.get('/', productsControllers.getAllProducts);

router.get('/:id', productsControllers.getByIdProduct);

router.post('/', validateNameProduct, productsControllers.add);

module.exports = router; 