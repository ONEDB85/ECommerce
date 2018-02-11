$(function() {

    var itemQuantity;

    $(".addBasket").click(function() {
        event.preventDefault();
        var inputEl = $(this).parent().find("input");
        var productNum = parseInt(inputEl.attr("data-product-num"));
        var count = parseInt(inputEl.val());
        menuItems[productNum].count = count;
        var added = $(this).text("added");
       
    });

    // array of menu objects
    var menuItems = [{
            item: "Pint Glass",
            cat: "Housewares",
            price: 1,
            count: 0
        },
        {
            item: "Ceramic Mug",
            cat: "Housewares",
            price: 5,
            count: 0
        },
        {
            item: "Travel Mug",
            cat: "Housewares",
            price: 10,
            count: 0
        },
        {
            item: "T-Shirt",
            cat: "Apparel",
            price: 4,
            count: 0
        },
        {
            item: "Sweatshirt",
            cat: "Apparel",
            price: 13,
            count: 0
        },
        {
            item: "Tank Top",
            cat: "Apparel",
            price: 7,
            count: 0
        },
        {
            item: "Knit Hat",
            cat: "Apparel",
            price: 20,
            count: 0
        },
        {
            item: "Baseball Cap",
            cat: "Apparel",
            price: 35,
            count: 0
        },
        {
            item: "Poster",
            cat: "Furnishings",
            price: 8,
            count: 0
        },
        {
            item: "Headphones",
            cat: "Electronics",
            price: 25,
            count: 0
        },
        {
            item: "MP3 Player",
            cat: "Electronics",
            price: 67,
            count: 0
        },
        {
            item: "Tablet",
            cat: "Electronics",
            price: 250,
            count: 0
        },
    ];

    var cart;
    var subtotal = 0;
    var tax = .06;
    var taxTotal = 0;
    var netTotal = 0;

    // goes to cart page
    $("#checkout").click(function() {
        cart = menuItems.filter(function(item) {
            return item.count > 0;
        });
        cart.forEach(function(item) {
            subtotal += parseInt(item.count) * parseInt(item.price);
        });
        taxTotal = subtotal * tax;
        taxTotal = parseFloat(taxTotal.toFixed(2));
        netTotal = subtotal + taxTotal;
        cart.forEach(function(item) {
            $("#productQuantity").append(
                "<li>" + item.count + " - " + item.item + "</li>"
            );
        });
        $("#cartSubTotal").text(subtotal.toFixed(2));
        $("#cartTax").text(taxTotal.toFixed(2));
        $("#cartTotal").text(netTotal.toFixed(2));
        $("#cart").toggleClass("hidden");
        $("#menu").toggleClass("hidden");
        buildReceipt();
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
        $("#cart").toggleClass("hidden");
        $("#credit").toggleClass("hidden");
    });

    // makes change
    var tendered = 0;
    $("#cashPay").click(function() {
        tendered = parseFloat($("#cashTendered").val());
        var change = tendered - netTotal;
        change = parseFloat(change.toFixed(2));
        $("#change").text(change.toFixed(2));
        $("#changeOutput").toggleClass("hidden");
        $("#toReceipt").toggleClass("hidden");
    })

    // print receipt button on cash page
    $("#toReceipt").click(function() {
        $("#cash").toggleClass("hidden");
        $("#receipt").toggleClass("hidden");
    });

    // cc pay does nothing except show receipt
    $("#ccPay").click(function() {
        $("#credit").toggleClass("hidden");
        $("#receipt").toggleClass("hidden");
    })

    function buildReceipt() {
        cart.forEach(function(product) {
            for (i = 0; i < product.count; i++) {
                $("#receipt").append("<p> " + product.item + " - $" + product.price + "</p>");
            }
        });
        $("#receipt").append("<p> subtotal: $" + subtotal + "</p>");
        $("#receipt").append("<p> tax: $" + taxTotal + "</p>");
        $("#receipt").append("<p> total: $" + netTotal + "</p>");
    }
});