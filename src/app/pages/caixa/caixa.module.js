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
          },
        }).state('caixa.fechamento', {
        url: '/fechamento',
        templateUrl: 'app/pages/caixa/views/fechamento.html',
        title: 'Fechamento',
        controller: 'CaixaPageCtrl',
        menuItem: true,
        sidebarMeta: {
            order: 20,
        },
    });
    $urlRouterProvider.when('/vendas','/vendas/nova');
  }

})();
