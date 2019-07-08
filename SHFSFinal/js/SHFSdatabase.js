
/**
 * File Name: SHdatabase.js
 *
 * Revision History:
 *       Sam Herron, 2018-4-05 : Created file
 */

var db;

/**
 * General purpose error handler
 * @param tx The transaction object
 * @param error The error object
 */
function errorHandler(tx, error) {
    console.error("SQL Error: " + tx + " (" + error.code + ") : " + error.message);
}

var DB = {
	
    SHFScreateDatabase: function(){
		
        var databaseName= "FinalDB";
        var versionNumber = "1.0";
        var description = "DB for Final Project";

        function goodCreate() {
            console.info("Success: Database has been created");
        }

        var size =  2 * 1024 * 1024;

        db = openDatabase(databaseName, versionNumber,
            description, size, goodCreate);
    },
    SHFScreateTables: function() {
        function txFunction(tx) {
            var options = [];
            var sql = "DROP TABLE IF EXISTS items";
            tx.executeSql(sql, options, goodCreate, errorHandler);


            sql = "CREATE TABLE IF NOT EXISTS items( " + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," + "item_name VARCHAR(30) NOT NULL,"
        + "item_price INTEGER," + "item_description VARCHAR(200));";

            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Orange Shirt', '30', 'Nice orange, affordable polo shirt to wear in the while chilling outside. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Blue Jeans', '50', 'Skinny blue jeans with big pockets and a lot of room. 99% cotton. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Red Hat', '20', 'Red hat to cover the sun and get some girls. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Green Shoes', '65', 'Lime green basketball shoes to cross up all your opponents. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Purple Shoes', '65', 'Purple basketball shoes to cross up all your opponents. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Blue Hat', '20', 'Blue hat to cover the sun and get some girls. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Blue Shirt', '25', 'A nice blue Nike style t-shirt. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "INSERT INTO items (item_name, item_price, item_description) VALUES('Purple Shirt', '25', 'A nice purple Nike style t-shirt. One size fits all.');";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            sql = "CREATE TABLE IF NOT EXISTS cart( " + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," + "item_name VARCHAR(30) NOT NULL,"
                + "item_price INTEGER NOT NULL," + "item_description VARCHAR(100)," + "item_quantity INTEGER NOT NULL);";
            tx.executeSql(sql, options, goodCreate, errorHandler);

            /* test insert
            sql = "INSERT INTO cart (item_name, item_price, item_description, item_quantity) VALUES ('test', 20, 'hello', 2);";
            tx.executeSql(sql, options, goodCreate, errorHandler);
            */
        }

        function goodCreate() {
            console.info("Success: Table has been created properly.");
        }

        function goodTransaction() {
            console.info("Success: Transition completed correctly");
        }
        db.transaction(txFunction, errorHandler, goodTransaction);
    },
    SHFSdropTables: function () {
        function txFunction(tx) {
            var sqlType = "DROP TABLE IF EXISTS items;";
            var sqlReview = "DROP TABLE IF EXISTS cart;";
            var options = [];
            function goodDrop() {
                console.info("Success: the table has been dropped");
            }
            tx.executeSql(sqlType, options, goodDrop, errorHandler);
            tx.executeSql(sqlReview, options,goodDrop, errorHandler);
        }
        function successTransaction() {
            console.info("Success: drop table transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
