var app = angular.module('CoffeeMateWebApp');

app.controller('coffeeController', ['$scope', '$http', '$location',function($scope, $http, $location) {

    $scope.coffee = {};

    $scope.message = 'Enter Your Coffee Details Below..';
    //$scope.price = 0;
    //$scope.options = [{ name: "PayPal", id: 0 }, { name: "Direct", id: 1 }];
    //$scope.formData.price = $scope.options[0];
    //$scope.coffee = {name : "", shop: "", price: 0};
    console.log($scope.coffee.name);

    $scope.addCoffee = function(){
        //$scope.formData.name = $scope.formData.name.name;
        //console.log($scope.formData.name);
        console.log($scope.coffee)
        $http.post('/coffees', $scope.coffee)
            .success(function(){

                $location.path('/coffees');
                console.log($scope.coffees);
            })
            .error(function(data){
                console.log('Error' + data);
            });
    }


}

]);

