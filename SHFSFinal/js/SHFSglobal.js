
/**
 * File Name: SHglobal.js
 *
 * Revision History:
 *       Sam Herron, 2018-4-05: Created file
 *       Sam Herron, 2018-4-15: Added functionality for A3
 */

//
// $(document).ready(function() {
//     init();
//     initDB();
//
//     localStorage.setItem("email", "sherron6310@conestogac.on.ca");
//
//     $('#SHhideMe').hide();
//     $('#SHcheck').click(function () {
//
//         $('#SHhideMe').toggle();
//     });
//
//     $('#SHeditHideMe').hide();
//     $('#SHeditCheck').click(function () {
//
//         $('#SHeditHideMe').toggle();
//     });
//
//     $("#SHfeedbackPage").on("pageshow", function () {
//         var defaultEmail = localStorage.getItem("email");
//         console.log(defaultEmail + " is the default email.");
//         $("#SHemail").val(defaultEmail);
//         SHupdateTypesDropdown();
//     });
//
//     $("#SHeditFeedbackPage").on("pageshow", function() {
//         SHeditUpdateTypesDropdown();
//     });
//
//     $("#SHviewFeedbackPage").on("pageshow", function() {
//        SHgetReviews();
//     });
//
//     $("#SHeditFeedbackPage").on("pageshow", function() {
//         SHshowCurrentReview();
//     });
//
//
//     $('#SHfoodQuality').change(function() {
//
//        showTotalRating();
//     });
//
//     $('#SHserviceRating').change(function() {
//
//         showTotalRating();
//     });
//
//     $('#SHvalueRating').change(function() {
//
//         showTotalRating();
//     });
//
//     $('#SHeditFoodQuality').change(function() {
//
//         showEditTotalRating();
//     });
//
//     $('#SHeditServiceRating').change(function() {
//
//         showEditTotalRating();
//     });
//
//     $('#SHeditValueRating').change(function() {
//
//         showEditTotalRating();
//     });
//
// });

function SHFSselectAll_pageShow(){
    SHFSdisplayAll();
}

function SHFSselectOne_pageShow(){

    $('#shfsItemTitle').prop('disabled', true);
    $('#shfsItemPrice').prop('disabled', true);
    $('#shfsItemDescription').prop('disabled', true);
    $('#SHFSitemQuantity').val(1);
    SHFSselectOne();
}



function init() {
    // $("#SHaddButton").on("click", btnAdd_click);
    // $("#SHclear").on("click", btnClear_click);
    // $("#SHeditButton").on("click", btnEdit_click);
    // $("#SHdelete").on("click", btnDelete_click);

    $("#SHFScataloguePage").on("pageshow", SHFSselectAll_pageShow);
    $("#SHFSitemPage").on("pageshow", SHFSselectOne_pageShow);
    $("#SHFSaddToCart").on("click", btnAddCart_click);
    $("#SHFScartPage").on("pageshow", SHFSshowCartItems);
    $("#SHFSclearCart").on("click", btnClear_click);
    $("#SHFSsubmitOrder").on("click", btnSubmit_click);
    $("#SHFSeditUpdate").on("click", btnUpdate_click);
    $("#SHFSeditDelete").on("click", btnDelete_click);
    $("#SHFSeditItemPage").on("pageshow", SHFSedit_pageShow);
}

function initDB() {

    try {
        DB.SHFScreateDatabase();
        if (db)
        {

            DB.SHFScreateTables();

        }

        else
            {
            console.error("Database is currently not available!");
        }
    }
    catch (exception)
    {
        console.error("There is an error in initDB!");
    }
}

function btnAddCart_click() {
    SHFSaddToCart();
}

function SHFSedit_pageShow() {
    $('#SHFSeditItemName').prop('disabled', true);
    $('#SHFSeditItemPrice').prop('disabled', true);
    $('#SHFSeditItemDescription').prop('disabled', true);
    SHFSselectOneEdit();
}

function btnClear_click() {
    SHFSclearCart();
}

function btnSubmit_click() {
SHFSsubmitOrder();

}

function btnUpdate_click() {
    SHFSeditQuantity();
}

function btnDelete_click() {
    SHFSeditDeleteItem();
}


// function btnAdd_click() {
// addReview();
// }
//
// function btnEdit_click() {
//     editReview();
// }
//
// function btnDelete_click() {
//
//     deleteReview();
// }
//
// function btnCancel_click() {
//
//     cancelEdit();
// }
//
// function btnClear_click() {
//     SHclearDatabase();


$(document).ready(function () {
   initDB();
    init();
});
