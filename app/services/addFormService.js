app.factory('addFormSvc', ['$http',
    function($http) {

        //object returned from factory
        var fc = {}

        //add product
        fc.addProduct = function(product, spinner, callback) {
            if (spinner) {
                //to do: add spinner
            }
            return $http.post('/api/product', { product: product }).success(function(data) {
                    console.log(data);
                    callback(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                    callback(data);
                });
        }

        return fc;

    }
]);