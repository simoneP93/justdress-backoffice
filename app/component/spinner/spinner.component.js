function CustomSpinnerController() {
    var ctrl = this;

    // ctrl.delete = function() {
    //     ctrl.onDelete({ hero: ctrl.hero });
    // };

    // ctrl.update = function(prop, value) {
    //     ctrl.onUpdate({ hero: ctrl.hero, prop: prop, value: value });
    // };
}

app.component('customSpinner', {
    templateUrl: 'app/component/spinner/customSpinner.html',
    controller: CustomSpinnerController,
    bindings: {
        show: '<',
        // onDelete: '&',
        // onUpdate: '&'
    }
});