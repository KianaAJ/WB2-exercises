"use strict"

console.log("DOES THIS WORK?")

// output: The tip on a $some-number food bill is $some-number

//  multiplying the total amount of the bill by the tip percentage expressed as a decimal. ° For instance: The total bill for a service is $27. The percentage to tip is typically 15% (0.15), 18% (0.18), or 20% (0.20).
// this is for 15% tip, you can alter accordingly.
var foodBill = 45
var tipPercentage = 0.15

var tipAmount= foodBill * tipPercentage

console.log("The tipAmount due is " + tipAmount)