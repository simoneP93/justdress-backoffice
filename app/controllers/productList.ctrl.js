app.controller('productList', ['$scope', '$http', 'productSvc',
    function($scope, $http, productSvc) {

        init();

        function init() {
            console.log('ci sono!');
            productSvc.getProduct(false, function(res) {
                console.log(res);
                $scope.productList = res;
                // toastr.success('Prodotto aggiunto correttamente!')
            });
        }
    }
]);