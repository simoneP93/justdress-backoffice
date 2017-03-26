app.controller('addProdotto', ['$scope', '$http', 'productSvc', 'TOASTRUTIL',
    function($scope, $http, productSvc, TOASTRUTIL) {


        init();

        function init() {
            console.log('ci sono!');
            console.log(TOASTRUTIL.options);
            toastr.options = TOASTRUTIL.options;
        }
        //todo: move to service-->get api-->db
        $scope.categorie = [{ nome: 'felpa', id: 1 }, { nome: 'tshirt', id: 2 }];

        $scope.product = {
            nome: "",
            prezzo: null,
            quantita: null,
            descrizione: "",
            foto: "foto",
            sesso: null,
            categoria: null,
            descrizione: null
        }


        $scope.addProduct = function(user) {
            console.log(user);
            var resList = [];
            // resList.push()
            productSvc.addProduct(user, false, function(res) {
                console.log(res);
                $scope.product = {};
                toastr.success('Prodotto aggiunto correttamente!')
            });
        }

    }
]);