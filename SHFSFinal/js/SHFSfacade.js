
/**
 * File Name: SHfacade.js
 *
 * Revision History:
 *       Sam Herron, 2018-4-05: Created file
 *       Sam Herron, 2018-4-15: Added functionality for A3
 */

/*

function addReview() {

    if (doValidate_SHFSaddFeedback()) {

        var name = $("#SHbusinessName").val();
        var email = $("#SHemail").val();
        var date = $("#SHreviewDate").val();
        var type = $("#SHtype :selected").val();
        var comments =  $("#SHcomments").val();
        var foodQuality = $("#SHfoodQuality").val();
        var serviceRating = $("#SHserviceRating").val();
        var valueRating = $("#SHvalueRating").val();
        var hasRating = 1;

        var options = [name, type, email, comments, date, hasRating, foodQuality, serviceRating, valueRating];
        function callback() {
            console.info("Success: Record has been inserted");
        }
        review.SHinsert(options, callback);
        alert("Review added successfully.");
        $.mobile.changePage("#SHviewFeedbackPage", {transition: 'flow'});

        var page = $("#SHfeedbackPage");
        page.page("refresh");

    }   else {
        console.error("Validation Failed");
    }
}

*/


/*
function editReview() {

    if (doValidate_SHFSeditFeedback()) {

        var name = $("#SHFSeditBusinessName").val();
        var email = $("#SHFSeditEmail").val();
        var type = $("#SHFSeditType").val();
        var date = $("#SHFSeditDate").val();
        var comments = $("#SHFSeditComments").val();
        var hasValues = 1;
        var foodQuality = $("#SHFSeditFoodQuality").val();
        var serviceRating = $("#SHFSeditServiceRating").val();
        var valueRating= $("#SHFSeditValueRating").val();

        var options = [name, type, email, comments, date, hasValues, foodQuality, serviceRating, valueRating, localStorage.getItem("id")];
        function callback() {
            console.info("Success: Record has been updated");
            alert("Review updated successfully.");
            $.mobile.changePage("#SHviewFeedbackPage", {transition: 'flow'});

        }
        review.SHupdate(options, callback);

    }   else {
        console.error("Validation Failed");
    }

}



function deleteItem() {

    var id = localStorage.getItem("id");


    var options = [id];


    function callback() {
        console.info("Delete has passed");
        $.mobile.changePage("#SHviewFeedbackPage", {transition: 'flip'});
    }

    review.SHFSdelete(options, callback);


}

function cancelEdit() {
    $.mobile.changePage("#SHviewFeedbackPage", {transition: 'flip'});

}

*/

function SHshowCart() {

    /*
    var id = localStorage.getItem("id");

    var options = [id];
    function callback(tx, results) {
        var row = results.rows[0];
        $("#SHeditBusinessName").val(row['businessName']);
        $("#SHeditType").val(row['typeId']);
        $("#SHeditEmail").val(row['reviewerEmail']);
        $("#SHeditDate").val(row['reviewDate']);
        $("#SHeditComments").val(row['reviewerComments']);

        if (row['hasRating'] == 'true') {
            $("#SHeditCheck").prop("checked", true);
        }
        else{
            $("#SHeditCheck").prop("checked", true);
        }

        $("#SHeditFeedback :checkbox").checkboxradio("refresh");

        $("#SHeditFoodQuality").val(row['rating1']);
        $("#SHeditServiceRating").val(row['rating2']);
        $("#SHeditValueRating").val(row['rating3']);

    }
    review.SHselect(options, callback);

    */
}

function SHclearDatabase() {
    var options = [];
    DB.SHdropTables();
    init();
    initDB();

    alert("Database has been cleared.");

    /*
    var list = $("#reviewList");
    list.listview("refresh");
    */
}

function SHFSdisplayAll() {
    var options = [];

    function callback(tx, results) {

        var htmlcode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            htmlcode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" + "<h1>Item Name: " + row['item_name'] + "</h1>" +
                "<h2>Price: $" + row['item_price'] + "</h2>" +
                "<p>Description " + row['item_description'] + "</p>" +
                "</a></li>";
        }


        var list = $("#displayAll");
        list = list.html(htmlcode);
        list.listview("refresh");


        $("#displayAll a").on("click", clickHandler);

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $.mobile.changePage("#SHFSitemPage", {transition: 'flip'});
        }
    }
    item.SHFSselectAll(options, callback);
}

function SHFSselectOne() {
    var id = localStorage.getItem("id");

    var options = [id];
    var htmlcode ="";
    function callback(tx, results) {
        var row = results.rows[0];

        console.info("Id: " + row['id'] +
            " Item Name: " + row['item_name'] +
            " Price: " + row['item_price'] +
            " Description: " + row['item_description']);

        if(id == 1) {
            htmlcode = "<li><img height=\"150\" width=\"150\" src=\"images/SHFSorangeshirt.png\"> " +
                "</li>";
        }
        else if(id == 2){
            htmlcode = "<li><img height=\"150\" width=\"150\" src=\"images/SHFSbluejeans.png\"> " +
                "</li>";
        }
        else if(id == 3)
        {
            htmlcode = "<li><img height=\"150\" width=\"150\" src=\"images/SHFSredhat.png\"> " +
                "</li>";
        }

        else if(id == 4)
        {
            htmlcode = "<li><img height=\"150\" width=\"300\" src=\"images/SHFSgreenshoes.png\">" +
                "</li>";
        }
        else if(id == 5)
        {
            htmlcode = "<li><img height=\"150\" width=\"300\" src=\"images/SHFSpurpleshoes.png\">" +
                "</li>";
        }
        else if(id == 6)
        {
            htmlcode = "<li><img height=\"150\" width=\"150\" src=\"images/SHFSblueHat.png\"> " +
                "</li>";
        }

        else if(id == 7)
        {
            htmlcode = "<li><img height=\"150\" width=\"150\" src=\"images/SHFSblueShirt.png\">" +
                "</li>";
        }
        else if(id == 8)
        {
            htmlcode = "<li><img height=\"150\" width=\"150\" src=\"images/SHFSpurpleShirt.png\">" +
                "</li>";
        }


        $("#shfsItemTitle").val(row['item_name']);
        $("#shfsItemPrice").val(row['item_price']);
        $("#shfsItemDescription").val(row['item_description']);



        var list = $("#displayPhoto");
        list = list.html(htmlcode);
        list.listview("refresh");

    }
    item.SHFSselect(options, callback);
}

function SHFSselectOneEdit() {
    var id = localStorage.getItem("id");

    var options = [id];
    var htmlcode ="";
    function callback(tx, results) {
        var row = results.rows[0];

        console.info("Id: " + row['id'] +
            " Item Name: " + row['item_name'] +
            " Price: " + row['item_price'] +
            " Description: " + row['item_description']);


        $("#SHFSeditItemName").val(row['item_name']);
        $("#SHFSeditItemPrice").val(row['item_price']);
        $("#SHFSeditItemDescription").val(row['item_description']);
        $("#SHFSeditItemQuantity").val(row['item_quantity']);


    }
    cart.SHFSselect(options, callback);
}



function SHFSaddToCart() {

    var item_title = $("#shfsItemTitle").val();
    var item_price = $("#shfsItemPrice").val();
    var item_description = $("#shfsItemDescription").val();
    var item_quantity = $("#SHFSitemQuantity").val();


    var options = [item_title, item_price, item_description, item_quantity];


    function callback(tx, results) {
       alert("Added To Cart");
    }

    if (parseInt(item_quantity) > 0) {


        cart.SHFSinsert(options, callback);

    } else {
        alert("Quantity must be greater than 0.");
    }
}

function SHFSshowCartItems() {
var options = [];

function callback(tx, results) {
    var htmlcode = "";
    for (var i = 0; i < results.rows.length; i++) {
        var row = results.rows[i];
        htmlcode += "<li><a data-row-id=" + row['id'] + ">" + "<h1>Item Name: " + row['item_name'] + "</h1>" +
            "<h2>Item Price: " + row['item_price'] + "</h2>" +
            "<h3>Item Description: " + row['item_description'] +
            "</h3><h3>Quantity: " + row['item_quantity'] + "</h3></a></li>";
    }







    if (htmlcode == "") {
        htmlcode = "<h1 id='SHFSemptyCart'>Cart is empty!</h1>";
    }


    var list = $("#SHFScartList");
    list = list.html(htmlcode);
    list.listview("refresh");



    $("#SHFScartList a").on("click", clickHandler);

    function clickHandler() {
        localStorage.setItem("id", $(this).attr("data-row-id"));
        $.mobile.changePage("#SHFSeditItemPage", {transition: 'flip'});
    }

}

        cart.SHFSselectAll(options, callback);

    }



function SHFSclearCart() {

    var options = [];

    function callback(tx, results) {

        alert("Cart has been cleared.");

        $.mobile.changePage("#SHFScataloguePage", {transition: 'flip'});
    }

    cart.SHFSdeleteCart(options, callback);

}

function SHFSeditQuantity() {


    var item_title = $("#SHFSeditItemName").val();
    var item_price = $("#SHFSeditItemPrice").val();
    var item_description = $("#SHFSeditItemDescription").val();
    var item_quantity = $("#SHFSeditItemQuantity").val();


    var options = [item_title, item_price, item_description, item_quantity, localStorage.getItem('id')];


    function callback(tx, results) {
        alert("Updated item quantity.");
        $.mobile.changePage("#SHFScartPage", {transition: 'slide'});
    }

    if (parseInt(item_quantity) > 0) {


        cart.SHFSupdate(options, callback);

    } else {
        alert("Quantity must be greater than 0.");
    }
}

function SHFSeditDeleteItem() {
    console.log("test delete");
}


function SHFSsubmitOrder() {

    /*
    var options = [];

    function callback(tx, results) {
        if (cart.SHFSselectAll(options, callback) == null) {
            alert("cart is empty");
        }
    }

    cart.SHFSselectAll(options, callback);

    */

    $.mobile.changePage("#SHFSinfoPage", {transition: 'flip'});
}

