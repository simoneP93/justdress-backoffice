app.controller('productList', ['$scope', 'productSvc', 'spinnerService', 'utilService',

    function($scope, productSvc, spinnerService, utilService) {

        init();
        $scope.propertyList = [];

        function init() {
            console.log('ci sono!');
            // spinnerService.show('booksSpinner');
            productSvc.getProduct(false, function(res) {
                console.log(res);
                $scope.productList = res;
                $scope.propertyList = utilService.getPropertyList($scope.productList);
            });

        }



    }
]);