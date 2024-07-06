'use strict';

(function (window, emr, undefined) {
    var getIndexedDBStorage = function () {
        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

        var IndexedDBImpl = function () {
            var self = this;
            var db = null;
            var request = indexedDB.open('TileStorage');

            request.onsuccess = function() {
                db = this.result;
                emr.fire('storageLoaded', self);
            };

            request.onerror = function (error) {
                console.log(error);
            };

            request.onupgradeneeded = function () {
                var store = this.result.createObjectStore('tile', { keyPath: 'key'});
                store.createIndex('key', 'key', { unique: true });
            };

            this.add = function (key, value) {
                var transaction = db.transaction(['tile'], 'readwrite');
                var objectStore = transaction.objectStore('tile');
                objectStore.put({key: key, value: value});
            };

            this.delete = function (key) {
                var transaction = db.transaction(['tile'], 'readwrite');
                var objectStore = transaction.objectStore('tile');
                objectStore.delete(key);
            };

            this.get = function (key, successCallback, errorCallback) {
                var transaction = db.transaction(['tile'], 'readonly');
                var objectStore = transaction.objectStore('tile');
                var result = objectStore.get(key);
                result.onsuccess = function () {
                    successCallback(this.result ? this.result.value : undefined);
                };
                result.onerror = errorCallback;
            };
        };

        return indexedDB ? new IndexedDBImpl() : null;
    };

    var getWebSqlStorage = function () {
        var openDatabase = window.openDatabase;

        var WebSqlImpl = function () {
            var self = this;
            var db = openDatabase('TileStorage', '1.0', 'Tile Storage', 5 * 1024 * 1024);
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS tile (key TEXT PRIMARY KEY, value TEXT)', [], function () {
                    emr.fire('storageLoaded', self);
                });
            });

            this.add = function (key, value) {
                db.transaction(function (tx) {
                    tx.executeSql('INSERT INTO tile (key, value) VALUES (?, ?)', [key, value]);
                });
            };

            this.delete = function (key) {
                db.transaction(function (tx) {
                    tx.executeSql('DELETE FROM tile WHERE key = ?', [key]);
                });
            };

            this.get = function (key, successCallback, errorCallback) {
                db.transaction(function (tx) {
                    tx.executeSql('SELECT value FROM tile WHERE key = ?', [key], function (tx, result) {
                        successCallback(result.rows.length ? result.rows.item(0).value : undefined);
                    }, errorCallback);
                });
            };
        };

        return openDatabase ? new WebSqlImpl() : null;
    };

    emr.on('storageLoad', function () {
        var storage =  getIndexedDBStorage() || getWebSqlStorage() || null;
        if (!storage) {
            emr.fire('storageLoaded', null);
        }
    });
})(window, window.offlineMaps.eventManager);