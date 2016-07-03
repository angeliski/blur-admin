(function() {
  'use strict';

  angular.module('TGB.pages.param')
      .service('abaService', abaService);

  /** @ngInject */
  function abaService() {
    var itens;
    this.recoverItens = function (){
      return [{
        id: 1,
        descricao: "Bebidas",
        ativo: true
      },{
        id: 2,
        descricao: "Salgados & Doces",
        ativo: true
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
