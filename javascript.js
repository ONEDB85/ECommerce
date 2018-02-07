$(function(){

// JavaScript-y things here

// counts from the menu selection
// these need ids for assignment later
// assign these values on click of checkout button

itemCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// intialize prices variables
// set prices in JavaScript
itemPrices = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];

// non item variables
var salesTax = 0.06;
var totalOwed;

function getSubtotal() {
  for (i = 0; i < 12; i++) {

  }
  return subtotal
}

function applyTax(preTaxTotal) {
  return preTaxTotal + preTaxTotal * salesTax;
}

function getTotal() {
  return applyTax(getSubtotal());
}

$("#menuButton").click(function() {
  var total = getSubtotal();
  totalOwed = applyTax(total);
});














































});
