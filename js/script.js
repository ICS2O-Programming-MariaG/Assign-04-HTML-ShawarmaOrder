// Copyright (c) 2022 Maria Goemans All rights reserved
//
// Created by: Maria G
// Created on: May 3, 2022
// This file contains the JS functions for index.html

"use strict"

function orderSent() {
  //setting a constant for tax
  const HST = 0.13;
  
  //initializing variables
  let baseSandCost = 0;
  
  //declaring variables for base sandwich and sides
  let meatType = document.getElementById("meat-type").value;
  let sandSize = document.getElementById("sand-size").value;
  let numDrinks = parseInt(document.getElementById("drinks").value);
  let numPotatoes = parseInt(document.getElementById("potatoes").value);
  
  //determining the number of checkboxes checked (number of toppings selected) - method found at https://www.techiedelight.com/count-number-check-boxes-javascript/
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let numToppings = checkboxes.length;
  
  //determining the cost of the toppings using a variable and a constant for the price
  const unitPriceToppings = 0.25;
  let costToppings = numToppings * unitPriceToppings;
  
  //determining the cost of the base sandwich using compound if/then statements
  //if the meat type is chicken and the size is small
  if ((meatType == "chicken") && (sandSize == "small")) {
    baseSandCost = 6.00;
  }
  //if the meat type is beef and the size is small
  else if ((meatType == "beef") && (sandSize == "small")) {
    baseSandCost = 6.50;
  }
  //if the meat type is chicken and the size is medium
  else if ((meatType == "chicken") && (sandSize == "medium")) {
    baseSandCost = 7.00;
  }
  //if the meat type is beef and the size is medium
  else if ((meatType == "beef") && (sandSize == "medium")) {
    baseSandCost = 7.50;
  }
  //if the meat type is chicken and the size is large
  else if ((meatType == "chicken") && (sandSize == "large")) {
    baseSandCost = 8.00;
  }
  //else indicates that the meat type is beef and the size is large
  else {
    baseSandCost = 8.50;
  }
  
  //determining the cost of the sides
  let costDrinks = numDrinks * 3.00;
  let costPotatoes = numPotatoes * 6.00;
  
  //calculating the subtotal, tax and total
  let subtotal = baseSandCost + costToppings + costDrinks + costPotatoes;
  let tax = subtotal * HST;
  let total = subtotal + tax;

  //displaying the totals to the screen
  document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ".<br>The amount of HST added is $" + tax.toFixed(2) + ".<br>Your total is $" + total.toFixed(2) + ".";
}
