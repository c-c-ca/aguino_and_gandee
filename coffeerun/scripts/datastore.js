(function (window) {
    'use strict';
    var App = window.App || {};
    var Promise = window.Promise;

    // Chapter 8 - Silver Challenge: Making data Private
    // var data = {};
    // remove `this.` from this.data in all DataStore methods

    function DataStore() {
        this.data = {};
    }

    function promiseResolvedWith(value) {
        var promise = new Promise(function (resolve, reject) {
            resolve(value);
        });
        return promise;
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
        return promiseResolvedWith(null);
    };

    DataStore.prototype.get = function (key) {
        return promiseResolvedWith(this.data[key]);
    }

    DataStore.prototype.getAll = function () {
        return promiseResolvedWith(this.data);
    }

    DataStore.prototype.remove = function (key) {
        delete this.data[key];
        return promiseResolvedWith(null);
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);
