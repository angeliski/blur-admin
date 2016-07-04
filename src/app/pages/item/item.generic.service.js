(function() {
  'use strict';

  angular.module('TGB.pages.item')
      .service('itemGenericService', itemGenericService);

  /** @ngInject */
  function itemGenericService() {
    this.recoverItensUnidade = function (){
      return [
        {id: 5, descricao: "PCT02-Pacote c/ 2 UN"},
        {id: 6, descricao: "PCT04-Pacote c/ 4 UN"},
        {id: 14, descricao: "PCT05-Pacote c/ 5 UN"},
        {id: 7, descricao: "PCT06-Pacote c/ 6 UN"},
        {id: 8, descricao: "PCT08-Pacote c/ 8 UN"},
        {id: 9, descricao: "PCT10-Pacote c/ 10 UN"},
        {id: 10, descricao: "PCT12-Pacote c/ 12 UN"},
        {id: 16, descricao: "PCT15-Pacote c/ 15 UN"},
        {id: 11, descricao: "PCT16-Pacote c/ 16 UN"},
        {id: 12, descricao: "PCT24-Pacote c/ 24 UN"},
        {id: 15, descricao: "PCT25-Pacote c/ 25 UN"},
        {id: 17, descricao: "PCT50-Pacote c/ 50 UN"},
        {id: 13, descricao: "PCT64-Pacote c/ 64 UN"},
        {id: 3, descricao: "PCTgrd-Pacote Grande"},
        {id: 2, descricao: "PCTpeq-Pacote Pequeno"},
        {id: 4, descricao: "PDC-Pedaço"},
        {id: 1, descricao: "UN-Unidade"}
      ];
    };
    
  this.recoverItensTipo = function (){
    return [
      {id: 1, descricao: "Comprado"},
      {id: 2, descricao: "Fabricado"}
    ];
  };
  this.recoverItensGrupo = function () {
    return [
        {id: 1, descricao: "Alimentos"},
        {id: 2, descricao: "Materiais Ritualístico"}
      ]
    };

    this.recoverItensEstoques = function () {
      return [
              {id: 2,descricao: "Café do Babá-TGSP"},
              {id: 3,descricao: "Alaka-SP"},
              {id: 4,descricao: "Alaká-Fortaleza"},
              {id: 5,descricao: "Alaká-Campinas"},
              {id: 6,descricao: "Kilombo-Campinas"}
            ]
    };

    this.recoverItensDepartamento = function () {
      return [
        {id: 6, descricao : "Alaká"},
        {id: 1, descricao : "CESA"},
        {id: 3, descricao : "CHEV"},
        {id: 5, descricao : "desativado"},
        {id: 7, descricao : "desativado"},
        {id: 4, descricao : "Kilombo/Café"},
        {id: 2, descricao : "TerraKota"}
      ]
    };

  }
})();
