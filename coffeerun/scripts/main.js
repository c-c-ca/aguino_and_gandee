(function (window) {
    'use strict';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    // var myTruck = new Truck('ncc-1701', new DataStore());
    // Chapter 8 - Bronze Challenge: Truck ID for Non-Trekkies
    var myTruck = new Truck('03-K64', new DataStore());
    window.myTruck = myTruck;
})(window);
