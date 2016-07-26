/**
 * @author rogerio.angeliski
 * created on 19.06.2016
 */
(function () {
    'use strict';

    angular.module('TGB.pages.caixa')
        .controller('CaixaPageCtrl', CaixaPageCtrl);

    /** @ngInject */
    function CaixaPageCtrl($scope, caixaService, $state, $uibModal) {
        $scope.item = {
            dataFechamento : new Date(),
            totalVendas:0,
            persistido: false
        };

        $scope.fecharVendas = function (item) {
            caixaService.fecharVendas(item);
            $state.go("caixa.lista-fechamento");
        };

        $scope.somaDasEntradas = function () {
            return ($scope.item.entradaTroco || 0)
                + ($scope.item.dinheiro || 0)
                + ($scope.item.cheque || 0)
                + ($scope.item.deposito || 0)
                + ($scope.item.xaluga || 0)
                + ($scope.item.debito || 0)
                + ($scope.item.credito || 0);
        };

        $scope.somaDasSaidas = function () {
            return ($scope.item.saidaTroco || 0)
                + ($scope.item.despesas || 0)
                + ($scope.item.colaboradores || 0);
        };

        $scope.valorFechamento = function () {
            return $scope.somaDasEntradas() - $scope.somaDasSaidas();
        };

        $scope.fechamentos = caixaService.listaFechamentos();
    }

})();
