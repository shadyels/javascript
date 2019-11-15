var username = window.prompt("Please enter your name.");
var greetingParagraph = document.getElementById("greeting");

greetingParagraph.innerHTML += " " + username+"!";

var num1 = parseInt(window.prompt("Enter a number: "));
var num2 = parseInt(window.prompt("Enter a number: "));

var operand1 = document.getElementById("operand1");
var operand2 = document.getElementById("operand2");

operand1.innerHTML += num1;
operand2.innerHTML += num2;

var sum = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var dov = num1 / num2;
var mod = num1 % num2;

document.getElementById("addition").innerHTML = "The sum of "+num1+" and "+ num2 + " is "+ sum;
document.getElementById("subtraction").innerHTML = "The difference of "+num1+" and "+ num2 + " is "+ sub;
document.getElementById("multiplication").innerHTML = "The product of "+num1+" and "+ num2 + " is "+ mul;
document.getElementById("division").innerHTML = "The quotient of "+num1+" and "+ num2 + " is "+ dov;
document.getElementById("modulus").innerHTML = "The modulus of "+num1+" and "+ num2 + " is "+ mod;