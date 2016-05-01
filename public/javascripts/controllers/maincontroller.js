var app = angular.module('CoffeeMateWebApp');


app.controller('mainController', ['$scope', 'loggedIn', function($scope, loggedIn) {
// create a message to display in our view
    $scope.message = 'CoffeeMate Web App 1.0';
    console.log(loggedIn);
    $scope.username = loggedIn.username;
    console.log($scope.username);
}
]);
