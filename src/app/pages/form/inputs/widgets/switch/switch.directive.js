/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.form')
      .directive('switch', switchDirective);

  /** @ngInject */
  function switchDirective($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      require: '?ngModel',
      scope: {
        ngModel: '='
      },
      template: '<div class="switch-container {{color}}"><input type="checkbox" ng-model="ngModel"></div>',
      link: function (scope, elem, attr,ngModel) {
        $timeout(function(){
          var $target = $(elem).find('input');
          scope.color = attr.color;
          $target.bootstrapSwitch({
            size: attr.size || 'small',
            onColor: attr.color,
            onText: attr.onText || "Ativo",
            offText: attr.offText || "Desativado"
          });

          $target.on('switchChange.bootstrapSwitch', function(event, state) {
            if (ngModel) {
              scope.$apply(function() {
                ngModel.$setViewValue(state);
              });
            }
          });
        });
      }
    };
  }
})();