myApp.factory('sampleFactory', ["$http", function($http) {

  let pokemonList = [];

  let getPokemonList = function() {return pokemonList;};

  let fetchPokemonsFromApi = function(numberOfPokemons) {

    pokemonList = [];

    for (let k = 0; k < numberOfPokemons; k++) {

      let id = Math.floor(1 + Math.random()*898);

      let url = "https://pokeapi.co/api/v2/pokemon/" + id;

      $http.get(url)
      .success(function(data, status, headers, config) {

        console.log(data.name); //(1)
        pokemonList.push(data);}

      )
      .error(function(data, status, headers, config) {console.log("Unable to find Pokémon data");});

      }

      console.log(pokemonList.length); //(2)

    }

  return {

    getPokemonList : getPokemonList,
    fetchPokemonsFromApi : fetchPokemonsFromApi

  };

}]);
