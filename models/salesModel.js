const connection = require('../db/connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(
    `SELECT
    a.sale_id AS 'saleId', b.date, a.product_id as 'productId', a.quantity
    FROM
    StoreManager.sales_products AS a
        INNER JOIN
    StoreManager.sales AS b
    ON a.sale_id = b.id;`,
  );

  return sales;
};

const getById = async (id) => {
  const [sales] = await connection.execute(
    `SELECT
    b.date, a.product_id as 'productId', a.quantity
    FROM
    StoreManager.sales_products AS a
        INNER JOIN
    StoreManager.sales AS b
    ON a.sale_id = b.id
    WHERE id= ?`,
    [id],
  );

  return sales;
};

module.exports = {
  getAllSales,
  getById,
}; 