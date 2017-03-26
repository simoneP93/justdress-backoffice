app.factory('productSvc', ['$http',
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

        //get all products
        fc.getProduct = function(spinner, callback) {
            if (spinner) {
                //to do: add spinner
            }
            return $http.get('/api/product').success(function(data) {

                    callback(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                    callback(data);
                });
        }

        fc.deleteProduct = function(product, spinner, callback) {
            console.log(product);
            if (spinner) {
                //to do: add spinner
            }

            return $http.delete('/api/product/' + product._id).success(function(data) {
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