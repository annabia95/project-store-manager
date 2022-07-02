const sinon = require('sinon');
const { expect } = require('chai');

const productModel = require("../../../models/productsModel");
const prouctsService = require("../../../services/productsSevice")

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

describe('Testando camada Service - function getAllProducts()', () => {

  describe('quando existem produtos criados', () => {
  before(() => {
    sinon.stub(productModel, 'getAllProducts').resolves(resultExecute);
  });

  after(() => {
    productModel.getAllProducts.restore();
  });

  it('Testa se o retorno é um array', async () => {
    const response = await prouctsService.getAllProducts();

    expect(response).to.be.an('array');
  });

  it('Testa se o array retornado não está vazio', async () => {
    const response = await prouctsService.getAllProducts();

    expect(response).to.not.be.empty;
  });
});
});

describe("Testando camada Service - function add()", () => {
  describe("quando é inserido com sucesso", async () => {
  const payloadProduct = {
    name: 'Escudo da Mulher Maravilha',
  };

    before(() => {
      sinon.stub(productModel, 'add').resolves({ id: 1 });
    });

    after(() => {
      productModel.add.restore();
    });

    it("retorna um objeto", async () => {
      const response = await prouctsService.add(payloadProduct);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo produto inserido', async () => {

      const response = await prouctsService.add(payloadProduct);
      expect(response).to.have.a.property("id");
    });
  });
});