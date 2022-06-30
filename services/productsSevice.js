const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();

  return products;
};

const getByIdProduct = async (id) => {
  const product = await productsModel.getByIdProduct(id);

  return product;
};

module.exports = {
  getAllProducts,
  getByIdProduct,
}; 