const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();

  return sales;
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);

  return sales;
};

/* const addNewSale = async (sales) => {
  const newSales = await salesModel.addNewSale(sales);

  return newSales;
}; */

module.exports = {
  getAllSales,
  getById,
/*   addNewSale, */
}; 