function ProductListController($timeout) {

    var ctrl = this;


    ctrl.$onChanges = function(changesObj) {
        console.log(changesObj);
    };
    ctrl.$onInit = function() {
        // $timeout(function() {
        console.log(ctrl.productItems);

        angular.forEach(ctrl.productItems, function(i) {
                console.log(i);
            })
            // }, 1000);
    }




    // for (var property in object) {
    //     if (object.hasOwnProperty(property)) {
    //         // do stuff
    //     }


    // init();
    // ctrl.delete = function() {
    //     ctrl.onDelete({ hero: ctrl.hero });
    // };

    // ctrl.update = function(prop, value) {
    //     ctrl.onUpdate({ hero: ctrl.hero, prop: prop, value: value });
    // };

}



app.component('productList', {
    templateUrl: 'app/component/productList/productList.html',
    controller: ProductListController,
    bindings: {
        listItems: '=',
        propertyItem: '='
            // onDelete: '&',
            // onUpdate: '&'
    }

});