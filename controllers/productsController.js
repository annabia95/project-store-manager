const productsService = require('../services/productsSevice');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await productsService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getByIdProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.getAllProducts(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ message: 'Product not found' });
    next(err);
   }
};

module.exports = {
  getAllProducts,
  getByIdProduct,
};