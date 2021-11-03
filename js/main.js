(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var FIREBASE_SERVER_URL = 'https://immaculate-ui.firebaseapp.com';

    var App = window.App;
    var Truck = App.Truck;

    var firebasedatastore = App.firebasedatastore;
    var FormHandler = App.FormHandler;
    var Validation = App.Validation;
    var CheckList = App.CheckList;

    var datastore = new firebasedatastore(FIREBASE_SERVER_URL);
    var truck = new Truck('ncc-1705', datastore);
    window.truck = truck;

    var checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(truck.deliverOrder.bind(truck));
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(function (data) {
        return truck.createOrder.call(truck, data)
            .then(function () {
                    checkList.addRow.call(checkList, data);
                },
                function () {
                    alert('Server unreachable. Try again later.');
                });
    });

    formHandler.addInputHandler(Validation.isCompanyEmail);

    truck.printOrders(checkList.addRow.bind(checkList));

    console.log(formHandler);
})(window);