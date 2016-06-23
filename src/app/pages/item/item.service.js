(function() {
  'use strict';

  angular.module('TGB.pages.item')
      .service('itemService', itemService);

  /** @ngInject */
  function itemService() {
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
    };

    this.listItens = function(){
      return itens;
    };

    this.salvar = function (itemParaSalvar) {
      if(itens){
        var item = itens.find(function (item){
          return item.id == itemParaSalvar.id;
        });
        if(!item){
          itemParaSalvar.id = itens.length;
          itens.push(itemParaSalvar);
        }
      }
    };



    itens = this.recoverItens();
  }
})();
