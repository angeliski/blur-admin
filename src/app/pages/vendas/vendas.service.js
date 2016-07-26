(function () {
    'use strict';

    function removeFromArray(arrayOrig, element) {
        var index = arrayOrig.indexOf(element);
        arrayOrig.splice(index, 1);
    }
    angular.module('BlurAdmin.pages.vendas')
        .service('vendasService', vendasService);

    /** @ngInject */
    function vendasService($state, $uibModal, toastr) {
        var that = this;

        function adicionarProduto (id, qtd, selecionados){
            function findItem(item) {
                return item.id == id;
            }

            for (var i = 0; i < selecionados.length; i++) {
                var selecionado = selecionados[i];
                var produtoAdicionado = produtos.find(findItem);
                if (produtoAdicionado) {
                    produtoAdicionado.qtd += qtd;
                } else {
                    selecionado.qtd = qtd;
                    produtos.push(selecionado);
                }
            }
        }
        //Sempre tomar cuidado ao reatribuir um array novo ao produtos,
        //  porque o angular não vai atualizar de boa
        // precisa buscar os itens novamente

        that.finalizarVenda = function (type,isEncomenda) {
            produtos = [];
            toastr.success('Sua compra foi finalizada!');
        };

        that.getProdutosAdicionados = function () {
            return produtos;
        };

        that.addItemVariacao = function (itemVariacao){
            var variacao = itemVariacao.variacao;
            variacao.observacao = itemVariacao.observacao;
            function findItem(item) {
                return item.id == variacao.id;
            }

            var selecionados = [variacao];
            adicionarProduto(variacao.id, 1, selecionados);
        };

        that.addItem = function (id, qtd) {
            function findItem(item) {
                return item.id == id;
            }

            var selecionados = itens.filter(findItem);
            adicionarProduto(id, qtd, selecionados);
        };

        that.removeItem = function (id, qtd) {
            function findItem(item) {
                return item.id == id;
            }

            var selecionado = produtos.find(findItem);
            selecionado.qtd -= qtd;
            if (selecionado.qtd <= 0) {
                removeFromArray(produtos, selecionado);
            }
        };

        that.deletaItem = function (id) {
            function findItem(item) {
                return item.id == id;
            }

            var selecionado = produtos.find(findItem);
            removeFromArray(produtos, selecionado);
        };

        that.findItem = function (id){
            function findItem(item) {
                return item.id == id;
            }

            return itens.find(findItem);
        }

        that.listProducts = function () {
            return itens;
        };

        that.listaProdutosPorAba = function () {
            return [
                {
                    descricao: "Material Ritualistico",
                    type: "materialritualistico",
                    itens: that.listProducts().filter(function (item) {
                        return item.type == 'materialritualistico'
                    })
                },
                {
                    descricao: "Bebidas",
                    type: "bebida",
                    itens: that.listProducts().filter(function (item) {
                        return item.type == 'bebida'
                    })
                },
                {
                    descricao: "Buffet",
                    type: "buffet",
                    itens: that.listProducts().filter(function (item) {
                        return item.type == 'buffet'
                    })
                },
                {
                    descricao: "Salgados",
                    type: "salgados",
                    itens: that.listProducts().filter(function (item) {
                        return item.type == 'salgados'
                    })
                },
                {
                    descricao: "Doces & Sobremesas",
                    type: "docessobremesas",
                    itens: that.listProducts().filter(function (item) {
                        return item.type == 'docessobremesas'
                    })
                }
            ];
        };

        that.recoverProducts = function () {
            return [{
                id: 1,
                nome: "Coca-Cola",
                preco: 4.00,
                type: "bebida",
                panelColor: ''
            },
                {
                    id: 2,
                    nome: "Guarana",
                    preco: 4.00,
                    type: "bebida",
                    panelColor: 'bg-fs-danger'
                }, {
                    id: 3,
                    nome: "Fanta Laranja",
                    preco: 4.00,
                    type: "bebida",
                    panelColor: 'bg-fs-info'
                },
                {
                    id: 4,
                    nome: "Fanta Uva",
                    preco: 4.00,
                    type: "bebida",
                    panelColor: 'bg-fs-success'
                },
                {
                    id: 5,
                    nome: "Sprite",
                    preco: 4.00,
                    type: "bebida",
                    panelColor: 'bg-fs-warning'
                },
                {
                    id: 6,
                    nome: "Suco de Lata",
                    preco: 3.50,
                    type: "bebida",
                    panelColor: 'bg-fs-success'
                },
                {
                    id: 7,
                    nome: "H20",
                    preco: 5.00,
                    type: "bebida",
                    panelColor: 'bg-fs-success'
                },
                {
                    id: 8,
                    nome: "Salgado",
                    preco: 4.00,
                    type: "salgados",
                    panelColor: 'bg-fs-danger'
                },
                {
                    id: 9,
                    nome: "Calça de Ogã",
                    type: "materialritualistico",
                    isVariavel: true,
                    possuiTamanho: true,
                    variacoes: [{
                        id: 10,
                        nome: "Calça de Lê",
                        preco: 45
                    }, {
                        id: 11,
                        nome: "Calça de Rumpi",
                        preco: 46
                    }, {
                        id: 12,
                        nome: "Calça de Rwm",
                        preco: 47
                    }
                    ]
                }
            ];
        };

        that.getVendasRealizadas = function (first, maxResult) {
            var preco = Math.floor(Math.random() * 30) + 1;
            var idInicio = 20008008 + first;
            var vendas = [
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                },
                {
                    id: idInicio++,
                    dataVenda: new Date(),
                    total: preco,
                    pago: preco,
                    pendente: false,
                    cancelado: false
                }
            ];
            
            return {
                data: vendas,
                numberOfPages: 5
            }
        };

        var produtos = [];
        var itens = that.recoverProducts();

    }
})();
