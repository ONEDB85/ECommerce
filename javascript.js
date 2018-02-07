$(function(){

// JavaScript-y things here

// counts from the menu selection
// these need ids?
// assign these values on click of checkout button

var item1Count;
var item2Count;
var item3Count;
var item4Count;
var item5Count;
var item6Count;
var item7Count;
var item8Count;
var item9Count;
var item10Count;
var item11Count;
var item12Count;

// intialize prices variables
// set prices in JavaScript
var item1Price;
var item2Price;
var item3Price;
var item4Price;
var item5price;
var item6price;
var item7price;
var item8price;
var item9price;
var item10price;
var item11price;
var item12price;

// non item variables
var salesTax = 0.06;
var totalOwed;

function getSubtotal() {
  var subtotal =
      item1Count * item1Price +
      item2Count * item2Price +
      item3Count * item3Price +
      item4Count * item4Price +
      item5Count * item5Price +
      item6Count * item6Price +
      item7Count * item7Price +
      item8Count * item8Price +
      item9Count * item9Price +
      item10Count * item10Price +
      item11Count * item11Price +
      item12Count * item12Price;
  return subtotal
}

function applyTax(preTaxTotal) {
  return preTaxTotal + preTaxTotal * salesTax;
}

function getTotal() {
  return applyTax(getSubtotal());
}

$("#menuButton").click(function() {
  item1Count =
  item2Count =
  item3Count =
  item4Count =
  item5Count =
  item6Count =
  item7Count =
  item8Count =
  item9Count =
  item10Count =
  item11Count =
  item12Count =
  var total = getSubtotal();
  total = applyTax(total);
});














































});
