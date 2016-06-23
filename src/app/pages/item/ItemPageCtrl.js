/**
 * @author rogerio.angeliski
 * created on 01.06.2016
 */
(function () {
  'use strict';

  angular.module('TGB.pages.item')
      .controller('ItemPageCtrl', ItemPageCtrl);

  /** @ngInject */
  function ItemPageCtrl($scope,itemService,itemGenericService, $state, $uibModal) {
      $scope.item =  { ativo:false };
      $scope.itens = itemService.listItens();
      $scope.itensUnidade = itemGenericService.recoverItensUnidade();
      $scope.itensTipo = itemGenericService.recoverItensTipo();
      $scope.itensGrupo = itemGenericService.recoverItensGrupo();
      $scope.itensEstoque = itemGenericService.recoverItensEstoques();
      
      $scope.$watch("item", function(){
          console.log("watch",arguments);
      });

    $scope.salvarItem = function(item){
      console.log(item);
      //itemService.salvar(item);
      //$state.go("item.lista");
    }

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
