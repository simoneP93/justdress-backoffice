app.service('utilService', function() {

    var fc = {};

    fc.getPropertyList = function(list) {

        var propertyList = [];
        var itemList = angular.copy(list);

        if (itemList.length > 0) {
            var item = itemList[0];

            for (var property in item) {

                if (item.hasOwnProperty(property)) {
                    // if (!checkProperty(property))
                    propertyList.push(property);
                }

            }
        }
        return propertyList;
    }

    function checkProperty(property) {
        if (property) {
            // console.log(property.substring(0, 1));
            return property.substring(0, 1) == '_';
        }
    }


    return fc;
});