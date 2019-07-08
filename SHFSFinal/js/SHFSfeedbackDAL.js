
/**
 * File Name: SHfeedbackDAL.js
 *
 * Revision History:
 *       Sam Herron, 2018-4-05 : Created file
 *       Sam Herron, 2018-4-15: Added functionality for A3
 */


var cart ={

    SHFSinsert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO cart (item_name, item_price, item_description, item_quantity) VALUES(?,?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Insert passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSupdate: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE cart SET item_name = ?, item_price = ?, item_description = ?, item_quantity = ? WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Update has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSdelete: function (options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM cart WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Delete has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSdeleteCart: function (options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM cart;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Delete has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSselect: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM cart WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Select has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSselectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM cart;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("selectAll has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};


var item ={

    SHFSinsert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO items (item_name, item_price, item_description) VALUES(?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Success: Insert passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSupdate: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE review SET businessName = ?, typeId = ?, reviewerEmail = ?, reviewerComments = ?, reviewDate = ?, hasRating = ?, rating1 = ?, rating2 = ?, rating3 = ? WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Update has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSdelete: function (options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM review WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Delete has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSselect: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM items WHERE id=?;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("Select has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },

    SHFSselectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM items;";

            tx.executeSql(sql, options, callback, errorHandler);
        }
        function successTransaction() {
            console.info("selectAll has passed");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
