/**
 * @author rogerio.angeliski
 * created on 02.07.2016
 */
(function () {
  'use strict';

  angular.module('TGB.pages.param')
      .controller('ListaPrecoPageCtrl', ListaPrecoPageCtrl);

  /** @ngInject */
  function ListaPrecoPageCtrl($scope,precoService, itemGenericService,itemService, abaService, $uibModal) {
    $scope.itens = precoService.listItens();
    $scope.itensProduto =  itemService.listItens();
    $scope.itensAba =  abaService.listItens();
    $scope.itensEstoque = itemGenericService.recoverItensEstoques();
    $scope.itensDepartamento = itemGenericService.recoverItensDepartamento();
    $scope.itensUnidade = itemGenericService.recoverItensUnidade();

    $scope.openModalProduto = function(){
      $scope.modalVariacao =  $uibModal.open({
        animation: true,
        scope: $scope,
        bindToController: true,
        templateUrl: "app/pages/param/preco/item-lista-preco.html",
        size: "lg"
      });
    }

  }

})();
