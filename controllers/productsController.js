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

const add = async (req, res, next) => {
  try {
    const { name } = req.body;

    const searchProduct = await productsService.searchProduct(name);
    if (searchProduct.length === 1) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    const product = await productsService.add(name);
    return res.status(201).json(product);
   } catch (error) {
    next(error);
   }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const product = await productsService.getByIdProduct(id);
    if (product.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    }
    const updateProduct = await productsService.update(id, name);
    return res.status(200).json(updateProduct);
   } catch (error) {
    next(error);
   }
};

const deleteProductId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await productsService.getByIdProduct(Number(id));

    if (product.length === 0) {
      res.status(404).json({ message: 'Product not found' });
    }
    const deleteProduct = await productsService.deleteProduct(id);

    res.status(204).json(deleteProduct);
   } catch (err) {
    next(err);
   }
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  add,
  update,
  deleteProductId,
}; 