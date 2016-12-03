app.controller('addProdotto', ['$scope', '$http', 'addFormSvc',
    function($scope, $http, addFormSvc) {

        init();

        function init() {
            console.log('ci sono!');
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
            addFormSvc.addProduct(user, false, function(res) {
                console.log(res);
            });
        }

    }
]);