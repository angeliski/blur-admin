/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.home')
      .controller('HomePageCtrl', HomePageCtrl);

  /** @ngInject */
  function HomePageCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.itens = [{
        data: "27/02/2015",
        nome: "Rogerio Angeliski",
        produto: "Camiseta",
        gira: "Sabado a Tarde - TGSP",
        pago: "Não",
        rowCss: 'success'
    }, {
        data: "27/02/2015",
        nome: "Rodrigo de Rosso",
        produto: "Bata",
        gira: "Sabado de manhã - MTG",
        pago: "Sim",
        rowCss: 'warning'
    }, {
        data: "27/01/2015",
        nome: "Roseli Carneiro",
        produto: "Roupa de Santo completa",
        gira: "Sabado de manhã - TGSP",
        pago: "Sim",
        rowCss: 'danger'
    }];

  }

})();
