var app = angular.module('CoffeeMateWebApp', ['ngRoute', 'ngMap']);



app.factory('loggedIn', function () {
    return { loggedIn: 'false',
                username: ''};
});


app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.ejs',
            controller: 'aboutController'

        })
        .when('/contact', {
            templateUrl : 'pages/contact.ejs',
            controller: 'contactController'
        })

        // route for the coffee page
        .when('/coffee', {
            templateUrl : 'pages/coffee.ejs',
            controller  : 'coffeeController'
        })
        .when('/edit/:id',{
            templateUrl : 'pages/edit.ejs',
            controller : 'editController'
        })
        .when('/coffees', {
            templateUrl : 'pages/coffees.ejs',
            controller  : 'coffeesController'
        })
        .when('/login', {
            templateUrl: 'pages/login.ejs',
            controller: 'logController'
        });


});






