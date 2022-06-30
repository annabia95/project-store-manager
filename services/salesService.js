const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();

  return sales;
};

const getById = async (id) => {
  const sales = await salesModel.getById(id);

  return sales;
};

module.exports = {
  getAllSales,
  getById,
}; 