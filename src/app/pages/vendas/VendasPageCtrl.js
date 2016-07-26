/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vendas')
      .controller('VendasPageCtrl', VendasPageCtrl);

  /** @ngInject */
  function VendasPageCtrl($scope, $state, $uibModal ,vendasService, itemGenericService) {
    $scope.itens = vendasService.listProducts();
    $scope.abas = vendasService.listaProdutosPorAba();
    $scope.produtos = vendasService.getProdutosAdicionados();
    $scope.tamanhos = itemGenericService.recoverTamanhos();


    $scope.addItemVariavel = function(id){
      $scope.item = vendasService.findItem(id);
      $scope.item.variacao = $scope.item.variacoes[0];
      $scope.modalProduto =  $uibModal.open({
        animation: true,
        scope: $scope,
        templateUrl: "/app/pages/vendas/nova/detalhe-produto-venda.html",
        size: "lg"
      });
    };

    $scope.salvarItemVariacao = function(item){
      vendasService.addItemVariacao(item);
      $scope.modalProduto.close();
    };

    $scope.addItem = function(id, qtd){
      vendasService.addItem(id,qtd);
      $scope.produtos = vendasService.getProdutosAdicionados();
    };

    $scope.removeItem = function(id, qtd){
      vendasService.removeItem(id,qtd);
      $scope.produtos = vendasService.getProdutosAdicionados();
    };

    $scope.deletaItem = function(id, qtd){
      vendasService.deletaItem(id);
      $scope.produtos = vendasService.getProdutosAdicionados();
    };

    
    $scope.getTotalVenda = function(){
      var sum = 0;
     for (var i = 0; i < vendasService.getProdutosAdicionados().length; i++) {
        var prod = vendasService.getProdutosAdicionados()[i];
        sum +=  prod.qtd * prod.preco;
      } 
      return sum;
    };

    $scope.finalizarVenda = function (type){
      vendasService.finalizarVenda(type,$state.current.data.encomenda);
      $scope.produtos = vendasService.getProdutosAdicionados();
    };

    $scope.paginate = function (tableState) {
      var pagination = tableState.pagination;

      var first = pagination.start || 0;
      var maxResult = pagination.number || 10;


      var paginated = vendasService.getVendasRealizadas(first, maxResult);
      pagination.numberOfPages = paginated.numberOfPages;
      $scope.data = paginated.data;
    };

  }
})();
