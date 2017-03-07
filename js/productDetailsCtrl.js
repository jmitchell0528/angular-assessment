angular.module("assessment")
  .controller("productDetailsCtrl", function($scope, $stateParams, service) {

    $scope.searchProduct = function() {
      $state.go("shop", {id: $scope.getProduct})
    }

  })
