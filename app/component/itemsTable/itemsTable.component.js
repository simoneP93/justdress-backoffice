function ItemsTableController($timeout) {

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



app.component('itemsTable', {
    templateUrl: 'app/component/itemsTable/itemsTable.html',
    controller: ItemsTableController,
    bindings: {
        listItems: '=',
        propertyItem: '=',
        title: '@',
        onDelete: '&',
        onEdit: '&',

        // onUpdate: '&'
    }

});