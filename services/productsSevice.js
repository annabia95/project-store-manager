const productsModel = require('../models/productsModel');

const getAllProducts = (id = null) => {
      if (id) {
        return productsModel.getAllProducts(id);
    }
    return productsModel.getByIdProduct();
};

module.exports = {
  getAllProducts,
};