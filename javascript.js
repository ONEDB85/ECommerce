$(function() {



    // JavaScript-y things here

    // counts from the menu selection

    var itemQuantity;
    $(":input").bind('keyup mouseup', function() {
        itemQuantity = $(this).val();
        // alert(itemQuantity);
        console.log(itemQuantity * 5);

    });


    // these need ids for assignment later
    // assign these values on click of checkout button

    var menuItems = [{
            Item: “Name1”,
            Price: 1
        },
        {
            Item: “Name2”,
            Price: 2
        },
        {
            Item: “Name3”,
            Price: 3
        },
        {
            Item: “Name4”,
            Price: 4
        },
        {
            Item: “Name5”,
            Price: 5
        },
        {
            Item: “Name6”,
            Price: 6
        },
        {
            Item: “Name7”,
            Price: 7
        },
        {
            Item: “Name8”,
            Price: 8
        },
        {
            Item: “Name9”,
            Price: 9
        },
        {
            Item: “Name10”,
            Price: 10
        },
        {
            Item: “Name11”,
            Price: 11
        },
        {
            Item: “Name12”,
            Price: 12
        },

    ];

    itemCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // intialize prices variables


    // set prices in JavaScript
    itemPrices = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

    // non item variables
    var salesTax = 0.06;
    var totalOwed;

    function getSubtotal() {
        // for (i = 0; i < 12; i++) {

        // }

        (5 * 5);

    }

    function applyTax(preTaxTotal) {
        return preTaxTotal + preTaxTotal * salesTax;
    }

    function getTotal() {
        // return applyTax(getSubtotal());
    }

    $("#checkoutButton").click(function() {
        var total = getSubtotal();
        totalOwed = applyTax(total);
    });














































});