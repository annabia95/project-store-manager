const sinon = require('sinon');
const { expect } = require('chai');
const connection = require("../../../db/connection");
const salesModel = require("../../../models/salesModel");

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
describe('Testando camada Model - function getAllSales()', () => {
  describe('quando não existe nenhuma venda criada', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves([[]])
    })
    after(() => {
      connection.execute.restore();
    })
    it('retorna um array', async () => {
      const response = await salesModel.getAllSales();
      expect(response).to.be.an('array');
    });
    it('retorna um array vazio', async () => {
      const response = await salesModel.getAllSales();
      expect(response).to.be.empty;
  });
  });



  describe('quando existem vendas criadas', () => {
    before(() => {
      sinon.stub(connection, 'execute').resolves(resultExecute);
    })

    after(() => {
      connection.execute.restore();
    })

    it('retorna um array', async () => {
      const response = await salesModel.getAllSales();

      expect(response).to.be.an('object');
    });

    it('o array não está vazio', async () => {
      const response = await salesModel.getAllSales();

      expect(response).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const item = await salesModel.getAllSales();

      expect(item).to.be.an('object');
    });

    it('tais itens possuem as propriedades: "saleId", "date", "productId" e "quantity"', async () => {
      const item = await salesModel.getAllSales();

      expect(item).to.include.all.keys(
        'saleId',
        'date',
        'productId',
        'quantity'
      );
    });
  });
});