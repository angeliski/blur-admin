/**
 * @author rogerio.angeliski
 * created on 02.07.2016
 */
(function () {
  'use strict';

  angular.module('TGB.pages.param')
      .controller('AbaPageCtrl', AbaPageCtrl);

  /** @ngInject */
  function AbaPageCtrl($scope,$state ,abaService,itemGenericService) {
    $scope.itens = abaService.listItens();
    $scope.itensEstoque = itemGenericService.recoverItensEstoques();

    $scope.salvarItem = function(item){
      abaService.salvar(item);
      $state.go("param.aba");
    }
  }

})();
