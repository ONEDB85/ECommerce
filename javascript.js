$(function() {



    // JavaScript-y things here

    // counts from the menu selection

    var itemQuantity;
    $(":input").bind('keyup mouseup', function() {
        itemQuantity = $(this).val();
        // alert(itemQuantity);
        console.log(itemQuantity * 5);
    });

    $("#buttonItem1").click(function() {
        event.preventDefault();
        menuItems[0].count = parseInt($("#inputItem1").val());
    });


    $("#buttonItem2").click(function() {
        event.preventDefault();
        menuItems[1].count = parseInt($("#inputItem2").val());
    });

    $("#buttonItem3").click(function() {
        event.preventDefault();
        menuItems[2].count = parseInt($("#inputItem3").val());
    });

    $("#buttonItem4").click(function() {
        event.preventDefault();
        menuItems[3].count = parseInt($("#inputItem4").val());
    });

    $("#buttonItem5").click(function() {
        event.preventDefault();
        menuItems[4].count = parseInt($("#inputItem5").val());
    });
    $("#buttonItem6").click(function() {
        event.preventDefault();
        menuItems[5].count = parseInt($("#inputItem6").val());
    });
    $("#buttonItem7").click(function() {
        event.preventDefault();
        menuItems[6].count = parseInt($("#inputItem7").val());
    });
    $("#buttonItem8").click(function() {
        event.preventDefault();
        menuItems[7].count = parseInt($("#inputItem8").val());
    });
    $("#buttonItem9").click(function() {
        event.preventDefault();
        menuItems[8].count = parseInt($("#inputItem9").val());
    });
    $("#buttonItem10").click(function() {
        event.preventDefault();
        menuItems[9].count = parseInt($("#inputItem10").val());
    });
    $("#buttonItem11").click(function() {
        event.preventDefault();
        menuItems[10].count = parseInt($("#inputItem11").val());
    });
    $("#buttonItem12").click(function() {
        event.preventDefault();
        menuItems[11].count = parseInt($("#inputItem12").val());
    });





    // these need ids for assignment later
    // assign these values on click of checkout button

    var menuItems = [{
            item: "Name1",
            price: 1,
            count: 0
        },
        {
            item: "Name2",
            price: 2,
            count: 0
        },
        {
            item: "Name3",
            price: 3,
            count: 0
        },
        {
            item: "Name4",
            price: 4,
            count: 0
        },
        {
            item: "Name5",
            price: 5,
            count: 0
        },
        {
            item: "Name6",
            price: 6,
            count: 0
        },
        {
            item: "Name7",
            price: 7,
            count: 0
        },
        {
            item: "Name8",
            price: 8,
            count: 0
        },
        {
            item: "Name9",
            price: 9,
            count: 0
        },
        {
            item: "Name10",
            price: 10,
            count: 0
        },
        {
            item: "Name11",
            price: 11,
            count: 0
        },
        {
            item: "Name12",
            price: 12,
            count: 0
        },

    ];



    // var salesTax = 0.06;
    // var totalOwed;

    // function getSubtotal() {
    //     // for (i = 0; i < 12; i++) {

    //     // }

    //     (5 * 5);

    // }

    var cart;
    var getSubtotal = 0;
    var tax = .06;
    var taxTotal = 0;
    var  netTotal = 0;
    $("#checkout").click(function() {
        event.preventDefault();
        cart = menuItems.filter(function(item) {
            return item.count > 0;
        });
        console.log(cart);

        cart.forEach(function(item) {
            getSubtotal += parseInt(item.count) * parseInt(item.price);
        });
       		console.log(getSubtotal);
        taxTotal = getSubtotal * tax;
          taxTotal = parseFloat(taxTotal.toFixed(2));
          console.log(taxTotal);
        netTotal = getSubtotal + taxTotal;
        console.log(netTotal);
        cart.forEach(function(item){
          $("#productQuantity").append(
            "<li>" + item.count + " " + item.item + "</li>"
          );

        });
        $("#cartSubTotal").text(getSubtotal);
        $("#cartTax").text(taxTotal);
        $("#cartTotal").text(netTotal);

    });

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
