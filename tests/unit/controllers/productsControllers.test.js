const sinon = require('sinon');
const { expect } = require('chai');

const productService = require("../../../services/productsSevice");
const productController = require("../../../controllers/productsController");

const resultExecute = [
    {
      id: 1,
      name: 'Martelo de Thor',
    },
    {
      id: 2,
      name: 'Traje de encolhimento',
    },
    {
      id: 3,
      name: 'Escudo do Capitão América',
    },
];

describe('Testando camada Controller - function getAllProducts()', () => {
  describe('quando existem produtos no banco de dados', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(productService, 'getAllProducts')
        .resolves(resultExecute);
    })

    after(() => {
      productService.getAllProducts.restore();
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await productController.getAllProducts(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await productController.getAllProducts(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  })
});

describe('Testando camada Controller - function add()', () => {
  describe("quando é inserido com sucesso", async () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        name: 'Escudo da Mulher Maravilha',
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();

      sinon.stub(productService, 'add')
        .resolves(request.body);
    });

    after(() => {
      productService.add.restore();
    });

    it("é chamado o status com o código 201", async () => {
      await productController.add(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um array', async () => {
      await productController.add(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(false);
    });
  })
});

