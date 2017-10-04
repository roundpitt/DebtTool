'use strict';
module

.directive('setHeight', ['$window', function ($window) {
  return {
      link: link,
      restrict: 'A'
   };
  function link(scope, element, attrs){
    scope.windowHeight = $window.innerHeight;
    angular.element($window).bind('resize', function(){
      scope.windowHeight = $window.innerHeight;

      // manual $digest required: resize event is outside of angular.
      scope.$digest();
    });
  }

}]);