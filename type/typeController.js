myApp.controller('TypeController', ["$scope", "$http", "$state","sampleFactory",

  function($scope, $http, $state, sampleFactory) {

    console.log(sampleFactory.getPokemonList().length); //(3)

    $scope.pokemonName = sampleFactory.getPokemonList()[0].name
    $scope.spriteUrl = sampleFactory.getPokemonList()[0].sprites.front_default

    $scope.reset = function() {

      sampleFactory.fetchPokemonsFromApi(1);
      $scope.pokemonName = sampleFactory.getPokemonList()[0].name
      $scope.spriteUrl = sampleFactory.getPokemonList()[0].sprites.front_default

    }

    $scope.goToHome = function() {$state.go("home");}

  }

]);
