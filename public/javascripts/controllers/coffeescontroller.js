var app = angular.module('CoffeeMateWebApp');

app.controller('coffeesController', ['$scope', '$location', '$http',  function($scope, $location, $http) {
    // create a message to display in our view
    $scope.message = 'Coffees Page!';

    findAll();

    $scope.edit =function(id){
        $location.path('/edit/'+id);

    };
    function findAll(){
        $http.get('/coffees')
            .success(function(data){
                $scope.coffees = data;

            })
            .error(function(data){
                console.log('Error: '+ data);
            });


    }

    $scope.delete = function(id){
        console.log("delete button clicked");
        if(confirm("Are you sure you want to delete this Coffee?")){
            console.log('Deleting id : ' + id);
            $http.delete('/coffees/'+id)
                .success(function(data){

                    console.log(data);
                    findAll();
                })
                .error(function(data){
                    console.log('Error: '+ id);
                })
        }
    }




}
]);
