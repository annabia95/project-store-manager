const connection = require('../db/connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );

  return products;
};

const getByIdProduct = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );

  return product;
};

const add = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?);',
    [name],
  );
    const result = {
        id: product.insertId,
        name,
    };
  
    return result;
};

const searchProduct = async (name) => {
  const [product] = await connection.execute(
    'SELECT name FROM StoreManager.products WHERE name = ?',
    [name],
  );

  return product;
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  searchProduct,
  add,
}; 