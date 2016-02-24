var app = angular.module('CoffeeMateWebApp')

app.controller('aboutController', ['$scope', function($scope){
    $scope.message = 'Look, I\'m an about Page!';

}]);