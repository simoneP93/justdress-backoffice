var app = angular.module('justDressApp', ['ngRoute', 'ngMaterial', 'ngSanitize', 'ngMdIcons', 'mdDataTable', 'angularSpinners']);

app.config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
            templateUrl: 'home.html',
            controller: 'controllerHome'
        }).
        /**
         * Prodotti
         */
    when('/profile', {
            templateUrl: 'app/views/profile/profile.html',
            // controller: 'profile'
        }).
        /**
         * Prodotti
         */
    when('/addProdotti', {
        templateUrl: 'app/views/products/addProdotto.html',
        controller: 'addProdotto'
    }).
    when('/ProdottiList', {
            templateUrl: 'app/views/products/productList.html',
            controller: 'productList'
        }).
        /**
         * Clienti
         */
    when('/addClienti', {
        templateUrl: 'app/views/customers/addClienti.html',
        controller: 'addProdotto'
    }).
    when('/ClientiList', {
            templateUrl: 'app/views/customers/ClientiList.html',
            controller: 'ClientiList'
        }).
        /**
         * Negozi
         */
    when('/addNegozi', {
        templateUrl: 'app/views/products/addProdotto.html',
        controller: 'addProdotto'
    }).
    when('/NegoziList', {
            templateUrl: 'app/views/products/productList.html',
            controller: 'productList'
        }).
        /**
         * Entrate
         */
    when('/addEntrate', {
        templateUrl: 'app/views/products/addProdotto.html',
        controller: 'addProdotto'
    }).
    when('/EntrateList', {
            templateUrl: 'app/views/products/productList.html',
            controller: 'productList'
        }).
        /**
         * Uscite
         */
    when('/addUscite', {
        templateUrl: 'app/views/products/addProdotto.html',
        controller: 'addProdotto'
    }).
    when('/UsciteList', {
            templateUrl: 'app/views/products/productList.html',
            controller: 'productList'
        })
        .otherwise('/')


    // $locationProvider.html5mode(true);
}])