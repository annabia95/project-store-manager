const sinon = require('sinon');
const { expect } = require('chai');

const productModel = require("../../../models/productsModel");
const productsService = require("../../../services/productsSevice")

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
    const response = await productsService.getAllProducts();

    expect(response).to.be.an('array');
  });

  it('Testa se o array retornado não está vazio', async () => {
    const response = await productsService.getAllProducts();

    expect(response).to.not.be.empty;
  });
});

  
  
});