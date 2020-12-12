myApp.controller('WeightController', ["$scope", "$state",

  function($scope, $state) {

    $scope.goToHome = function() {$state.go("home");};

  }

]);
