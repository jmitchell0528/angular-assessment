angular.module("assessment")
  .controller("shopCtrl", function($scope, $stateParams, shopService) {

    // $scope.products = service.getProducts;

    $scope.getProducts = function() {
      shopService.getProducts().then(function(response) {
        console.log(response)
        $scope.products = response.data;
      });
    }
    $scope.getProducts();

  });
