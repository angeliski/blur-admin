/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('TGB.pages.caixa', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('caixa', {
          url: '/caixa',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Caixa',
          menuItem: true,
          sidebarMeta: {
            icon: 'fa fa-university',
            order: 110,
          }
        }).state('caixa.fechamento', {
        url: '/fechamento',
        templateUrl: 'app/pages/caixa/views/fechamento.html',
        title: 'Encerrar Caixa',
        controller: 'CaixaPageCtrl',
        menuItem: true,
        sidebarMeta: {
            order: 20
        }
    }).state('caixa.lista-fechamento', {
        url: '/lista-fechamento',
        templateUrl: 'app/pages/caixa/views/lista-fechamento.html',
        title: 'Lista',
        controller: 'CaixaPageCtrl',
        menuItem: true,
        sidebarMeta: {
            order: 30
        }
    });

    $urlRouterProvider.when('/caixa','/caixa/fechamento');
  }

})();
