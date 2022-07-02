const validateProductId = (req, res, next) => {
  const arrNewSale = req.body;

  const error = { message: '"productId" is required', statusCode: 400 };

  arrNewSale.forEach((elem) => {
    if (!elem.productId) {
      throw error;
    }    
  });

  next();
};

module.exports = validateProductId;