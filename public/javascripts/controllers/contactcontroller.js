var app = angular.module('CoffeeMateWebApp');


app.controller('contactController', ['$scope', function($scope) {
// create a message to display in our view
    $scope.message = 'I\'m a contact page!!';
}
]);
