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

    const product = await productsService.getByIdProduct(Number(id));
    
    if (product.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(...product);
   } catch (err) {
    next(err);
   }
};

module.exports = {
  getAllProducts,
  getByIdProduct,
};