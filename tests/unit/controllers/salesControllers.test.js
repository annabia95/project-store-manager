const sinon = require('sinon');
const { expect } = require('chai');

const salesService = require("../../../services/salesService");
const salesController = require("../../../controllers/salesControllers");

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


describe('Testando camada Controller - function getAllProducts()', () => {
  describe('quando existem filmes no banco de dados', async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(salesService, 'getAllSales')
        .resolves(resultExecute);
    })

    after(() => {
      salesController.getAllSales.restore();
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await salesController.getAllSales(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await salesController.getAllSales(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  })
});