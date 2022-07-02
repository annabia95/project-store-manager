const sinon = require('sinon');
const { expect } = require('chai');

const salesModel = require("../../../models/salesModel");
const salesService = require("../../../services/salesService")

const resultExecute = [
      {
        "saleId": 1,
        "date": "2022-05-27T01:59:51.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "saleId": 2,
        "date": "2022-05-27T01:59:51.000Z",
        "productId": 3,
        "quantity": 15
      },
      {
        "saleId": 1,
        "date": "2022-06-07T18:25:39.000Z",
        "productId": 2,
        "quantity": 10
      }
];

describe('Testando camada Service - function getAllSales()', () => {

  describe('quando existem vendas criadas', () => {
    before(() => {
      sinon.stub(salesModel, 'getAllSales').resolves(resultExecute);
    });

    after(() => {
      salesModel.getAllSales.restore();
    });

    it('Testa se o retorno é um array', async () => {
      const response = await salesService.getAllProducts();

      expect(response).to.be.an('array');
    });

    it('Testa se o array retornado não está vazio', async () => {
      const response = await salesService.getAllProducts();

      expect(response).to.not.be.empty;
    });
  });
});