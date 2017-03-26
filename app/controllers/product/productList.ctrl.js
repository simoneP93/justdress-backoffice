app.controller('productList', ['$scope', 'productSvc', 'spinnerService', 'utilService', 'TOASTRUTIL', '$mdDialog',

    function($scope, productSvc, spinnerService, utilService, TOASTRUTIL, $mdDialog) {

        toastr.options = TOASTRUTIL.options;

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

        $scope.deleteProduct = function(prod) {
            productSvc.deleteProduct(prod, false, function(res) {
                console.log(res);
                toastr.success('Prodotto eliminato correttamente!')

                $scope.$broadcast("updateProduct");
            });

        }

        $scope.showEdit = function(prod) {
            console.log(prod);
            $mdDialog.show({
                    controller: 'DialogController',
                    //template: '<md-dialog aria-label="Mango (Fruit)"><md-content class="md-padding"><form name="clientForm"><div layout layout-sm="column"><md-input-container flex><label>Id</label><input ng-model="client.id"></md-input-container> <md-input-container flex><label>Nome</label><input ng-model="client.nome"></md-input-container></div><md-input-container flex><label>Citt�</label><input ng-model="client.citta"></md-input-container><div layout layout-sm="column"><md-input-container flex><label>Indirizzo</label><input ng-model="client.indirizzo"></md-input-container><md-input-container flex><label>Sesso</label><input ng-model="client.sesso"></md-input-container><md-input-container flex><label>Et�</label><input ng-model="client.eta"></md-input-container></div><md-datepicker ng-model="client.data" md-placeholder="Enter date"></md-datepicker></form></md-content><div class="md-actions" layout="row"><span flex></span><md-button ng-click="answer()"> Reset </md-button><md-button ng-click="submit()" class="md-primary"> Aggiungi </md-button></div></md-dialog>',
                    templateUrl: 'app/component/productList/dialogAddProdotto.html',
                    // targetEvent: ev,
                    resolve: {
                        $dataObj: function() {
                            return {
                                product: prod
                            }
                        }
                    }
                })
                .then(function(answer) {

                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.alert = 'You cancelled the dialog.';
                });
        };

        $scope.$on("updateProduct", function() {
            productSvc.getProduct(false, function(res) {
                console.log(res);
                $scope.productList = res;
                $scope.propertyList = utilService.getPropertyList($scope.productList);
            });
        });

    }
]);