/**
 * @author rogerio.angeliski
 * created on 01.06.2016
 */
(function () {
  'use strict';

  angular.module('TGB.pages.item')
      .controller('ItemPageCtrl', ItemPageCtrl);

  /** @ngInject */
  function ItemPageCtrl($scope,itemService, $uibModal) {
      $scope.itens = itemService.listItens();

    $scope.editVariacao = function(){

    }

    $scope.addVariacao = function(){
      $scope.modalVariacao =  $uibModal.open({
        animation: true,
        controller: function ($scope,$uibModalInstance){
          $scope.salvarVariacao = function(){

            $uibModalInstance.close();

          }
        },
        bindToController: true,
        templateUrl: "app/pages/item/views/variacao-unica.html",
        size: "sm"
      });
      console.log($scope.modalVariacao);
    }
  }

})();
