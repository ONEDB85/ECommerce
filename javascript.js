$(function() {

    var itemQuantity;

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

// array of menu objects
    var menuItems = [{
            item: "Pint Glass",
            cat: "Housewares",
            desc: "",
            price: 1,
            count: 0
        },
        {
            item: "Ceramic Mug",
            cat: "Housewares",
            desc: "",
            price: 5,
            count: 0
        },
        {
            item: "Travel Mug",
            cat: "Housewares",
            desc: "",
            price: 10,
            count: 0
        },
        {
            item: "T-Shirt",
            cat: "Apparel",
            desc: "",
            price: 4,
            count: 0
        },
        {
            item: "Sweatshirt",
            cat: "Apparel",
            desc: "",
            price: 13,
            count: 0
        },
        {
            item: "Tank Top",
            cat: "Apparel",
            desc: "",
            price: 7,
            count: 0
        },
        {
            item: "Knit Hat",
            cat: "Apparel",
            desc: "",
            price: 20,
            count: 0
        },
        {
            item: "Baseball Cap",
            cat: "Apparel",
            desc: "",
            price: 35,
            count: 0
        },
        {
            item: "Poster",
            cat: "Furnishings",
            desc: "",
            price: 8,
            count: 0
        },
        {
            item: "Headphones",
            cat: "Electronics",
            desc: "",
            price: 25,
            count: 0
        },
        {
            item: "MP3 Player",
            cat: "Electronics",
            desc: "",
            price: 67,
            count: 0
        },
        {
            item: "Tablet",
            cat: "Electronics",
            desc: "",
            price: 250,
            count: 0
        },
    ];

    var cart;
    var getSubtotal = 0;
    var tax = .06;
    var taxTotal = 0;
    var netTotal = 0;

  // goes to cart page
    $("#checkout").click(function() {
        event.preventDefault();
        cart = menuItems.filter(function(item) {
            return item.count > 0;
        });
        cart.forEach(function(item) {
            getSubtotal += parseInt(item.count) * parseInt(item.price);
        });
        taxTotal = getSubtotal * tax;
        taxTotal = parseFloat(taxTotal.toFixed(2));
        netTotal = getSubtotal + taxTotal;
        cart.forEach(function(item){
          $("#productQuantity").append(
            "<li>" + item.count + " " + item.item + "</li>"
          );
        });
        $("#cartSubTotal").text(getSubtotal);
        $("#cartTax").text(taxTotal);
        $("#cartTotal").text(netTotal);
        $("#cart").toggleClass("hidden");
        $("#menu").toggleClass("hidden");
    });

// goes to cash change screen
    $("#cashbutton").click(function() {
      event.preventDefault();
      $("#cashTotal").text(netTotal);
      $("#cart").toggleClass("hidden");
      $("#cash").toggleClass("hidden");
    });

// goes to credit card screen
    $("#creditbutton").click(function() {
      event.preventDefault();
      $("#cart").toggleClass("hidden");
      $("#credit").toggleClass("hidden");
    });

// makes change
    var tendered = 0;
    $("#cashPay").submit(function() {
      event.preventDefault();
      tendered = parseFloat($("#cashTendered").val());
      var change = tendered - netTotal;
      $("#change").text(change);
    })

    // print receipt button on cash page
    $("#toReceipt").click(function() {
      $("#cash").toggleClass("hidden");
      $("#receipt").toggleClass("hidden");
    });

    // cc pay does nothing except show receipt
    $("#ccPay").submit(function() {
      event.preventDefault();
      $("#credit").toggleClass("hidden");
      $("#receipt").toggleClass("hidden");
    })
});
