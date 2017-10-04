'use strict';

var module = angular.module('app', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', '$locationProvider', 
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/Map/:mapId', {
        templateUrl: 'map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/Map/:mapId/Place/:placeId', {
        templateUrl: 'place.html',
        controller: 'PlaceCtrl',
        controllerAs: 'place'
      })
      .when('/Combat/:combatId', {
        templateUrl: 'combat.html',
        controller: 'CombatCtrl',
        controllerAs: 'combat'
      })
      .when('/VirtualWallet', {
        templateUrl: 'vw.html',
        controller: 'VirtualWalletCtrl',
        controllerAs: 'virtualwallet'
      })
      .when('/AccountActivity', {
        templateUrl: 'AccountActivity.html',
        controller: 'AccountActivityCtrl',
        controllerAs: 'accountactivity'
      })
      .when('/', {
        templateUrl: 'login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });

    $locationProvider.html5Mode(true);
}]);