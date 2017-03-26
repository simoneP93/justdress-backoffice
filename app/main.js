var app = angular.module('justDressApp', ['ngRoute', 'ngMaterial', 'ngSanitize', 'ngMdIcons', 'mdDataTable', 'angularSpinners']);

app.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'home.html',
        controller: 'controllerHome'
    }).
    when('/addprodotto', {
        templateUrl: 'addProdotto.html',
        controller: 'addProdotto'
    }).
    when('/productList', {
            templateUrl: 'productList.html',
            controller: 'productList'
        })
        .otherwise('/')


    // $locationProvider.html5mode(true);
}])