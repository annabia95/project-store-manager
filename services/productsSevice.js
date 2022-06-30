const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.getAllProducts();

  return products;
};

const getByIdProduct = async (id) => {
  const product = await productsModel.getByIdProduct(id);

  return product;
};

const searchProduct = async (name) => {
  const product = await productsModel.searchProduct(name);

  return product;
};

const add = async (name) => {
  const product = await productsModel.add(name);

  return product;
};

const update = async (id, name) => {
  const product = await productsModel.update(id, name);
  return product;
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  searchProduct,
  add,
  update,
}; 