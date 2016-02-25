var app = angular.module('CoffeeMateWebApp');


app.controller('editController', ['$route', '$scope', '$http','$routeParams', '$location', function($route, $scope, $http ,$routeParams, $location ) {
// create a message to display in our view
    $scope.message = 'Update a Coffee';
    //$scope.coffee.id = $routeParams.id;


    function findOne(id) {
        $http.get('/coffees/'+id)
            .success(function (data) {
                $scope.coffee = data;


                $scope.coffee.name = data[0].name;
                $scope.coffee.shop = data[0].shop;
                $scope.coffee.price = data[0].price;
                $scope.coffee.favourite = data[0].favourite;
                $scope.tempfavourite = $scope.coffee.favourite;
                $scope.coffee.star = data[0].star;
                console.log($scope.coffee);
                return $scope.coffee;

            })
            .error(function (data) {
                console.log('Error: ' + data);
            });

    }

    var id  = ($routeParams.id);

    console.log(id);
    var coffee = findOne(id);
    console.log(coffee);
    console.log($scope.coffee);


    $scope.isFavourite = function(){
        console.log($scope.coffee);
        return coffee.favourite;
    }
    $scope.favourite = function(id){
        console.log("you clicked the start");
            //if($scope.coffee.favourite == true)
               // $scope.coffee.favourite = false;
            //else
                //$scope.coffee.favourite = true;
            //console.log($scope.coffee.favourite);
           // $route.reload();


    }



    $scope.editCoffee = function(id){
        $scope.coffee[0].name = $scope.coffee.name;
        $scope.coffee[0].shop = $scope.coffee.shop;
        $scope.coffee[0].price = $scope.coffee.price;
        $scope.coffee[0].favourite = $scope.tempfavourite;

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
