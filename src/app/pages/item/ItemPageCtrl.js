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
      $scope.item =  { variacoes:[] };
      $scope.itens = itemService.listItens();
      $scope.itensUnidade = itemGenericService.recoverItensUnidade();
      $scope.itensTipo = itemGenericService.recoverItensTipo();
      $scope.itensGrupo = itemGenericService.recoverItensGrupo();
      $scope.itensEstoque = itemGenericService.recoverItensEstoques();


      $scope.salvarItem = function(item){
          itemService.salvar(item);
          $state.go("item.lista");
      };

      $scope.editVariacao = function(variacao){
          $scope.variacao = variacao;
          $scope.openModalVariacao();
      };

      $scope.removeVariacao = function(variacao){

      };

      $scope.salvarVariacao = function(variacao){
          if(variacao && variacao.descricao){
              $scope.item.variacoes.push(variacao);
          }
          $scope.variacao = {};
          $scope.modalVariacao.close();
      };


      $scope.openModalVariacao = function(){
          $scope.modalVariacao =  $uibModal.open({
            animation: true,
            scope: $scope,
            bindToController: true,
            templateUrl: "app/pages/item/views/variacao-unica.html",
            size: "sm"
          });
      }
  }

})();
