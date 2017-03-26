app.controller('DialogController', ['$scope', '$mdDialog', '$dataObj',
    function($scope, $mdDialog, $dataObj) {
        $scope.model = $dataObj;
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
        $scope.submit = function() {
            alert();
            $mdDialog.hide();
            console.log($scope.product);
        }
    }
]);