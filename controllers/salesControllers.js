const salesService = require('../services/salesService');

const getAllSales = async (_req, res, next) => {
  try {
    const sales = await salesService.getAllSales();

    res.status(200).json(sales);
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const sales = await salesService.getById(Number(id));

    if (sales.length === 0) {
      res.status(404).json({ message: 'Sale not found' });
    }

    res.status(200).json(sales);
   } catch (err) {
    next(err);
   }
};

/* const addNewSale = async (req, res, next) => {
  try {
    const newSale = await salesService.addNewSale(req.body);
    res.status(201).json(newSale);
   } catch (err) {
    next(err);
   }
}; */

module.exports = {
  getAllSales,
  getById,
/*   addNewSale, */
}; 