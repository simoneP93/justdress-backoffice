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
    ctrl.delete = function(prod) {
        console.log(prod);
        ctrl.onDelete({ item: prod });
    };

    ctrl.edit = function(prod) {
        console.log(prod);
        ctrl.onEdit({ item: prod });
    };

    // ctrl.update = function(prop, value) {
    //     ctrl.onUpdate({ hero: ctrl.hero, prop: prop, value: value });
    // };

}



app.component('productList', {
    templateUrl: 'app/component/productList/productList.html',
    controller: ProductListController,
    bindings: {
        listItems: '=',
        propertyItem: '=',
        onDelete: '&',
        onEdit: '&',

        // onUpdate: '&'
    }

});