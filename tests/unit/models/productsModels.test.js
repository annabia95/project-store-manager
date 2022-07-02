const sinon = require('sinon');
const { expect } = require('chai');
const connection = require("../../../db/connection");
const productsModel = require("../../../models/productsModel");

describe('Testando camada Model - function getAllProducts()', () => {
  describe('quando não existe nenhum produto criado', () => {
    before(() => {
      const resultExecute = [[]];
      sinon.stub(connection, 'execute').resolves(resultExecute)
    })
  });

  after(() => {
    connection.execute.restore();
  })
  it('retorna um array', async () => {
    const response = await productsModel.getAllProducts();
    expect(response).to.be.an('array');
  });

  describe('quando existem produtos criados', () => {
    before(() => {
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
      sinon.stub(connection, 'execute').resolves(resultExecute);
    })

    after(() => {
      connection.execute.restore();
    })

    it('retorna um array', async () => {
      const response = await productsModel.getAllProducts();

      expect(response).to.be.an('array');
    });

    it('o array não está vazio', async () => {
      const response = await productsModel.getAllProducts();

      expect(response).to.not.be.empty;
    });

    it('o array possui itens do tipo objeto', async () => {
      const item = await productsModel.getAllProducts();

      expect(item).to.be.an('object');
    });

    it('tais itens possuem as propriedades: "id", "name"', async () => {
      const item = await productsModel.getAllProducts();

      expect(item).to.include.all.keys(
        'id',
        'name',
      );
    });
  });
});