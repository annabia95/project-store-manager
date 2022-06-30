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

const searchProduct = async (name) => {
  const [product] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name = ?;',
    [name],
  );

  return product;
};

const add = async (name, quantity) => {
    const [product] = await connection.execute(`INSERT INTO StoreManager.products (name) 
    VALUES (?)`, [name, quantity]);
    const result = {
        id: product.insertId,
        name,
        quantity,
    };
    return result;
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  searchProduct,
  add,
}; 