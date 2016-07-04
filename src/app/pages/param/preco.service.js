(function() {
  'use strict';

  angular.module('TGB.pages.param')
      .service('precoService', precoService);

  /** @ngInject */
  function precoService() {
    var itens;
    this.recoverItens = function (){
      return [{
        id: 1,
        departamento: "Café do Babá-TGSP",
        ativo: true,
        validade: "01/06/2016 a 30/06/2016"
      },{
        id: 1,
        departamento: "Café do Babá-TGSP",
        ativo: true,
        validade: "30/06/2016"
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
