alert('welcome to Tour travelling cost generator') 
alert(`flight cost and hotel expesnses are $500+$150
\n $1=9433.34 sum`) 
alert(`museum and other entertainment expenses are 120 Euro
\n 1 Euro = 10354.03 sum`) 


var a = prompt("Please insert your financial status for flight and living cost cost",0)
var b = prompt("Please insert your financial status for museum and entertainment cost",0)

var x= Number(a)
var y= Number(b)

if (x+y>8317489){
console.log("Alisher can afford this journey");
} else{
console.log("Alisher can't afford this journey")
}