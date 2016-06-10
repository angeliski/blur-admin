(function() {
  'use strict';

  angular.module('TGB.pages.item')
      .service('itemService', itemService);

  /** @ngInject */
  function itemService($state) {
    var itens;
    this.recoverItens = function (){
      return [{
        id: 1,
        descricao: "Coca-Cola",
        ativo: true
      },{
        id: 2,
        descricao: "Guarana",
        ativo: false
      }];
    }
    this.listItens = function(){
      return itens;
    }

    itens = this.recoverItens();
  }
})();
