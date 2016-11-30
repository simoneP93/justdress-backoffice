var app = angular.module('justDressApp', ['ngRoute', 'ngMaterial']);

app.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'home.html',
        controller: 'controllerHome'
    }).
    when('/addprodotto', {
            templateUrl: 'addProdotto.html',
            controller: 'addProdotto'
        })
        .otherwise('/')


    // $locationProvider.html5mode(true);
}])