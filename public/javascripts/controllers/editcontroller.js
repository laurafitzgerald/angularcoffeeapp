var app = angular.module('CoffeeMateWebApp');


app.controller('editController', ['$scope', '$http','$routeParams', '$location', function($scope, $http ,$routeParams, $location ) {
// create a message to display in our view
    $scope.message = 'Update a Coffee';
    //$scope.coffee.id = $routeParams.id;
    var id  = ($routeParams.id);
    console.log(id);
    findOne(id);

    function findOne(id) {
        $http.get('/coffees/'+id)
            .success(function (data) {
                $scope.coffee = data;
                console.log(data);

                $scope.coffee.name = data[0].name;
                $scope.coffee.shop = data[0].shop;
                $scope.coffee.price = data[0].price;



            })
            .error(function (data) {
                console.log('Error: ' + data);
            });

    }

    $scope.editCoffee = function(id){
        $scope.coffee[0].name = $scope.coffee.name;
        $scope.coffee[0].shop = $scope.coffee.shop;
        $scope.coffee[0].price = $scope.coffee.price;

        $http.put('/coffees/'+$routeParams.id, $scope.coffee)
            .success(function(data){
                console.log(data);

                $location.path('/coffees');

            })
            .error(function(data){
                console.log('Error' + data);
            });
    }


}
]);
