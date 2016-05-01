var app = angular.module('CoffeeMateWebApp');


app.controller('editController', ['$route', '$scope', '$http','$routeParams', '$location', 'loggedIn', function($route, $scope, $http ,$routeParams, $location, loggedIn ) {

    $scope.loggedIn = loggedIn.loggedIn;
    console.log($scope.loggedIn);
    if($scope.loggedIn==='false'){
        $location.path('/login');
    }


    $scope.message = 'Update a Coffee';
    //$scope.coffee.id = $routeParams.id;


    function findOne(id) {
        $http.get('/coffees/'+id)
            .success(function (data) {
                $scope.coffee = data;
                console.log($scope.coffee);

                return $scope.coffee;

            })
            .error(function (data) {
                console.log('Error: ' + data);
            });

    }

    var id  = ($routeParams.id);

    console.log(id);
    findOne(id);

    console.log($scope.coffee);


    $scope.isFavourite = function(){
        console.log($scope.coffee);
        return $scope.coffee.favourite;
    }
    $scope.favourite = function(){
        console.log("you clicked the star");
            if($scope.coffee.favourite == true)
                $scope.coffee.favourite = false;
            else
                $scope.coffee.favourite = true;
            console.log($scope.coffee.favourite);
           // $route.reload();


    };
    $scope.setStar = function(num){

        $scope.coffee.star = num;
        console.log("star clicked " + $scope.coffee.star);
    };



    $scope.editCoffee = function(id){
        console.log(id);
        console.log($scope.coffee);

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
