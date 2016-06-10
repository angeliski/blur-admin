/**
 * @author rogerio.angeliski
 * created on 01.06.2016
 */
(function () {
  'use strict';

  angular.module('TGB.pages.item')
      .controller('ItemPageCtrl', ItemPageCtrl);

  /** @ngInject */
  function ItemPageCtrl($scope,itemService) {
      $scope.itens = itemService.listItens();
  }

})();
