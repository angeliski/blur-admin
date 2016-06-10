/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('TGB.pages.item', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('item', {
          url: '/item',
          template : '<ui-view></ui-view>',
          abstract: true,
          controller: 'ItemPageCtrl',
          title: 'Item',
          menuItem: true,
          sidebarMeta: {
            icon: 'fa fa-gift',
            order: 100,
          },
        }).state('item.novo', {
          url: '/novo',
          templateUrl: 'app/pages/item/views/novo.html',
          title: 'Novo item',
          menuItem: true,
          sidebarMeta: {
            order: 20,
          },
        }).state('item.lista', {
          url: '/lista',
          templateUrl: 'app/pages/item/views/lista.html',
          title: 'Lista de itens',
          menuItem: true,
          sidebarMeta: {
            order: 10,
          },
        });
      
    $urlRouterProvider.when('/item','/item/lista');
  }

})();
