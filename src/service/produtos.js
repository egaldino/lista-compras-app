import {
  cadastrarProduto as cadastrarProdutoApi,
  listarProdutos as listarProdutosApi,
} from '../api/produtoApi';

import {
  cadastrarProduto as cadastrarProdutoDb,
  listarProdutos as listarProdutosDb,
  recuperarProduto as recuperarProdutoDb,
} from '../database/dao/produto';

export const cadastrarProduto = produto => {
  return cadastrarProdutoApi(produto);
};

export const listarProdutos = async () => {
  try {
    const response = await listarProdutosApi();
    if (response.status === 200 && response.data && response.data.length > 0) {
      for (let item of response.data) {
        let produto = await recuperarProdutoDb(item.id);
        if (!produto) {
          await cadastrarProdutoDb(item);
        }
      }
    }
  } catch (e) {
    console.log(e);
  }
  return await listarProdutosDb();
};
