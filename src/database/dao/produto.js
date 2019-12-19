import Realm from 'realm';
import {ProdutoSchema} from '../models';

export const cadastrarProduto = produto => {
  return Realm.open({schema: [ProdutoSchema]})
    .then(realm => {
      realm.write(() => {
        realm.create(ProdutoSchema.name, produto);
      });

      realm.close();
    })
    .catch(error => {
      console.log(error);
    });
};

export const listarProdutos = () => {
  return Realm.open({schema: [ProdutoSchema]}).then(realm => {
    const produtos = Array.from(realm.objects(ProdutoSchema.name));
    return produtos;
  });
};

export const recuperarProduto = id => {
  return Realm.open({schema: [ProdutoSchema]}).then(realm => {
    const produtos = Array.from(
      realm.objects(ProdutoSchema.name).filtered('id == ' + id),
    );
    if (produtos.length > 0) {
      return produtos[0];
    }
  });
};
