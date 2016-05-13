/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vendas', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('vendas', {
          url: '/vendas',
          template : '<ui-view></ui-view>',
          abstract: true,
          controller: 'VendasPageCtrl',
          title: 'Vendas',
          menuItem: true,
          sidebarMeta: {
            icon: 'fa fa-shopping-cart',
            order: 100,
          },
        }).state('vendas.nova', {
          url: '/nova',
          templateUrl: 'app/pages/vendas/nova/nova.html',
          title: 'Nova venda',
          menuItem: true,
          sidebarMeta: {
            order: 0,
          },
        }).state('vendas.realizadas', {
          url: '/realizadas',
          templateUrl: 'app/pages/vendas/realizadas/realizadas.html',
          title: 'Vendas realizadas',
          menuItem: true,
          sidebarMeta: {
            order: 100,
          },
        });
    $urlRouterProvider.when('/vendas','/vendas/nova');
  }

})();
