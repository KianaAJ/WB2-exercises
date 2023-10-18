"use strict"

console.log("DOES THIS WORK?")

//output At a some-number% interest rate, your savings account will be worth some-number in some-number years.
//formula 72/IR = T
var Savings = 400
var IR = 4
var T = 72/IR
var SavingsIncrease = Savings * 2

// t	=	number of periods required to double an investment's value
// {r}	=	interest rate per period, as a percentage

console.log("At a " + IR + "% interest rate, your savings account will be worth $" + SavingsIncrease + " in " + T.toFixed(2) + "years");
