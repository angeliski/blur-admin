(function() {
  'use strict';

  function removeFromArray(arrayOrig, element){
      var index = arrayOrig.indexOf(element);
      arrayOrig.splice(index, 1);
  }

  angular.module('BlurAdmin.pages.vendas')
      .service('vendasService', vendasService);

  /** @ngInject */
  function vendasService($state) {
    

    this.getProdutosAdicionados = function (){
      return produtos;
    }

    this.addItem =  function(id, qtd){
        function findItem(item){
                  return item.id == id;
         };

        var selecionados = itens.filter(findItem);

        for (var i = 0; i < selecionados.length; i++) {
          var selecionado = selecionados[i];
          var produtoAdicionado = produtos.find(findItem);  
          if(produtoAdicionado){
            produtoAdicionado.qtd += qtd;
          }else{
            selecionado.qtd = qtd;
            produtos.push(selecionado);
          }
        };

    };

    this.removeItem =  function(id, qtd){
        function findItem(item){
                  return item.id == id;
         };

        var selecionado = produtos.find(findItem);
        selecionado.qtd -= qtd;
        if(selecionado.qtd <= 0){
          removeFromArray(produtos,selecionado);
        }
    };

    this.deletaItem = function(id){
        function findItem(item){
                  return item.id == id;
         };

        var selecionado = produtos.find(findItem);
        removeFromArray(produtos,selecionado);
    };

    this.listProducts = function (){
      return itens;
    }

    this.recoverProducts = function(){
        return [{
      id: 1,    
      nome : "Coca-Cola",
      preco: 4.00,
      type: "bebida",
      panelColor: ''
    },
    {
      id: 2,
      nome : "Guarana",
      preco: 4.00,
      type: "bebida",
      panelColor: 'bg-fs-danger'
    },{
      id: 3,
      nome : "Fanta Laranja",
      preco: 4.00,
      type: "bebida",
      panelColor: 'bg-fs-info'
    },
    {
      id: 4,
      nome : "Fanta Uva",
      preco: 4.00,
      type: "bebida",
      panelColor: 'bg-fs-success'
    },
    {
      id: 5,
      nome : "Sprite",
      preco: 4.00,
      type: "bebida",
      panelColor: 'bg-fs-warning'
    },
    {
      id: 8,
      nome : "Suco de Lata",
      preco: 3.50,
      type: "bebida",
      panelColor: 'bg-fs-success'
    },
    {
      id: 6,
      nome : "H20",
      preco: 5.00,
      type: "bebida",
      panelColor: 'bg-fs-success'
    },
    {
      id: 7,
      nome : "Salgado",
      preco: 4.00,
      type: "salgado",
      panelColor: 'bg-fs-danger'
    }
    ];
      }


    var produtos = [];
    var itens = this.recoverProducts();
   
  }
})();
