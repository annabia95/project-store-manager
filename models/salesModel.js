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

const addSalesProducts = async (saleId, productId, quantity) => {
  await connection.execute(
    `INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity)
    VALUES(?, ?, ?)`, [saleId, productId, quantity],
  );

  return {
    productId,
    quantity,
  };
};

/* const addNewSale = async (sales) => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales(date) VALUES(NOW());',
  );

  const newSales = await Promise
  .all(sales.map((elem) => addSalesProducts(elem.productId, elem.quantity)));

  const create = ({
      id: sale.insertId,
      itemsSold: newSales,
    });
  return create;
}; */

module.exports = {
  getAllSales,
  getById,
  addSalesProducts,
/*   addNewSale, */
}; 