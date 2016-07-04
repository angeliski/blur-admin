/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('TGB.pages.param', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('param', {
          url: '/param',
          template : '<ui-view></ui-view>',
          abstract: true,
          title: 'Parâmetros',
          menuItem: true,
          sidebarMeta: {
            icon: 'ion-wrench',
            order: 100,
          },
        }).state('param.aba', {
          url: '/aba',
          templateUrl: 'app/pages/param/aba/lista-aba.html',
          controller: 'AbaPageCtrl',
          title: 'Abas',
          menuItem: true,
          sidebarMeta: {
            order: 20,
          },
        }).state('param.abanova', {
        url: '/aba/nova',
        templateUrl: 'app/pages/param/aba/nova-aba.html',
        controller: 'AbaPageCtrl',
        title: 'Nova aba',
        menuItem: false,
        sidebarMeta: {
            order: 30,
        },
    }).state('param.lista-preco', {
        url: '/lista-preco',
        templateUrl: 'app/pages/param/preco/lista-preco.html',
        controller: 'ListaPrecoPageCtrl',
        title: 'Preços',
        menuItem: true,
        sidebarMeta: {
            order: 40,
        },
    }).state('param.lista-preco-nova', {
        url: '/lista-preco-nova',
        templateUrl: 'app/pages/param/preco/nova-lista-preco.html',
        controller: 'ListaPrecoPageCtrl',
        title: 'Nova lista de preços',
        menuItem: false,
        sidebarMeta: {
            order: 50,
        },
    });
      
    $urlRouterProvider.when('/param','/param/aba');
  }

})();
