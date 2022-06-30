const productsModel = require('../models/productsModel');

const getAllProducts = (id = null) => {
      if (id) {
        return productsModel.getAllProducts(id);
    }
    return productsModel.getByIdProduct();
};

const getByIdProduct = async (id) => {
  const product = await productsModel.getByIdProduct(id);

  return product;
};

module.exports = {
  getAllProducts,
  getByIdProduct,
};