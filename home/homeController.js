myApp.controller('HomeController', ["$scope", "$state", "$http", "sampleFactory",

  function($scope, $state, $http, sampleFactory) {

    $scope.goToType = function() {

      sampleFactory.fetchPokemonsFromApi(1);
      $state.go("type");

    };

    $scope.goToWeight = function() {

      sampleFactory.fetchPokemonsFromApi(2);
      $state.go("weight");

    };

  }

]);
