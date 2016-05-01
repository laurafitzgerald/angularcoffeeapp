var app = angular.module('CoffeeMateWebApp');

app.controller('coffeeController', ['$scope', '$http', '$location', 'NgMap', function($scope, $http, $location, NgMap) {


    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });




    $scope.coffee = {};
    $scope.coffee.location_lat = null;
    $scope.coffee.location_lng = null;
    $scope.coffee.a_number = 1.903489348938943;

    $scope.message = 'Enter Your Coffee Details Below..';
    //$scope.price = 0;
    //$scope.options = [{ name: "PayPal", id: 0 }, { name: "Direct", id: 1 }];
    //$scope.formData.price = $scope.options[0];
    //$scope.coffee = {name : "", shop: "", price: 0};
    console.log($scope.coffee.name);

    $scope.addCoffee = function(){
        //$scope.formData.name = $scope.formData.name.name;
        //console.log($scope.formData.name);
        console.log($scope.coffee);
        $http.post('/coffees', $scope.coffee)
            .success(function(){

                $location.path('/coffees');
                console.log($scope.coffees);
            })
            .error(function(data){
                console.log('Error' + data);
            });
    }


    $scope.mapClicked = function(e){


        $scope.coffee.location_lat = e.latLng.lat();
        $scope.coffee.location_lng = e.latLng.lng();
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());

    };

}

]);

