var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
       url: '/home',
       templateUrl: 'home/home.html'
    })

    .state('type', {
       url: '/type',
       templateUrl: 'type/type.html'
    })

    .state('weight', {
       url: '/weight',
       templateUrl: 'weight/weight.html'
    });

    $urlRouterProvider.otherwise('home');

});
