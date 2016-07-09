/**
 * @author rogerio.angeliski
 * created on 02.07.2016
 */
(function () {
  'use strict';

  angular.module('TGB.pages.param')
      .controller('ListaPrecoPageCtrl', ListaPrecoPageCtrl);

  /** @ngInject */
  function ListaPrecoPageCtrl($scope, $state, precoService, itemGenericService,itemService, abaService, $uibModal) {
    $scope.item = {
                produtos:[]
              };
    $scope.itens = precoService.listItens();
    $scope.itensProduto =  itemService.listItens();
    $scope.itensAba =  abaService.listItens();
    $scope.itensEstoque = itemGenericService.recoverItensEstoques();
    $scope.itensDepartamento = itemGenericService.recoverItensDepartamento();
    $scope.itensUnidade = itemGenericService.recoverItensUnidade();

    $scope.openModalProduto = function(){
      $scope.modalProduto =  $uibModal.open({
        animation: true,
        scope: $scope,
        templateUrl: "app/pages/param/preco/item-lista-preco.html",
        size: "lg"
      });
    };
    
    $scope.salvarProdutoItem = function(produto){
        precoService.adicionarProdutoALista($scope.item,produto);
        $scope.modalProduto.close();
    };
    
    $scope.salvarItem =function(item){
      precoService.salvar(item);
      $state.go("param.lista-preco");
    };

  }

})();
