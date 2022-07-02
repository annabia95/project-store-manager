const validateQuantity = (req, res, next) => {
  const arrSales = req.body;

  arrSales.forEach((elem) => {
    if (!elem.quantity) {
      const error = { message: '"quantity" is required', statusCode: 400 };
      throw error;
    }  
    if (elem.quantity < 0 || elem.quantity === 0) {
      const error = { message: '"quantity" must be greater than or equal to 1', statusCode: 422 };
      throw error;
    }
  });

  next();
};

module.exports = validateQuantity;