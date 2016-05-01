var app = angular.module('CoffeeMateWebApp');


app.controller('logController', ['$route', '$scope', '$http','$routeParams', '$location', 'loggedIn', function($route, $scope, $http ,$routeParams, $location ,loggedIn) {

    $scope.userlogin = {};

    $scope.loggedIn = loggedIn.loggedIn;


    $scope.login = function(){
        $scope.userregister ={};
        console.log($scope.userlogin);
        $http.get('/auth', $scope.userlogin)
            .success(function(response){

                console.log($scope.userlogin.password);
                console.log(response);
                if(response.message==='valid'){
                    console.log("Valid details");
                    loggedIn.loggedIn = 'true';
                    loggedIn.username = $scope.userlogin.username;
                    console.log($scope.loggedIn);
                    console.log(loggedIn.loggedIn);
                    console.log(loggedIn.username);
                    $location.path('/coffees');


                }else if(response.message==="invalid"){
                    console.log("Invalid details");
                    $scope.invalid = "Invalid Username";
                }
            })
            .error(function(response){
                console.log("Error" + response);
                $scope.invalid = "Invalid Password";
            });

    };

    $scope.register = function(){


        $http.post('/users', $scope.userregister)
            .success(function(){

                $location.path('/');

            })
            .error(function(data){
                console.log('Error' + data);
            });


    };





}]);