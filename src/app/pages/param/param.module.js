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
    });
      ;
      
    $urlRouterProvider.when('/param','/param/aba');
  }

})();
