(function() {
  'use strict';

  angular.module('TGB.pages.caixa')
      .service('caixaService', caixaService);

  /** @ngInject */
  function caixaService() {
    var fechamentos = [{
      id: 1,
      dataFechamento: new Date(),
      local: "TG SP",
      totalVendas: 1234,
      totalFechamento: 1234
    },
      {
        id: 2,
        dataFechamento: new Date(),
        local: "TG SP",
        totalVendas: 1234,
        totalFechamento: 1230
      }];

    this.listaFechamentos = function(){
      return fechamentos;
    };

    this.fecharVendas = function(item){
      fechamentos.push(item);
    };

  }
})();
