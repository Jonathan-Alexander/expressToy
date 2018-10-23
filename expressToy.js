//Express Toy Application

/*
Task:
Create an Express application that exposes endpoints for 'nth Fibonacci number' 
and 'factor number N'. Use JSON as the response format
*/
const port = 3000;
//Require Express
const express = require('express');
const app = express();

//Require Fibonacci
const fib = require('fibonacci');

//Require Factor
const fact = require('factor');

//Check command line arg for N
if(process.argv.length != 3) {
	console.log("Incorrect usage. Correct usage: 'node expressToy.js [N]'. N is the number to be used in Fibonacci and Factor");
	process.exit();
}
var N = process.argv[2];
var fibN = fib.iterate(N).number;
var factN = fact(N);
var nums = factN;
nums.push(fibN);
endpoints = nums.map(
	function(arg){
		return "/"+String(arg);

});
var unique_endpoints = endpoints.filter(function(currentVal, index){
	return endpoints.indexOf(currentVal) == index;
});


app.get(endpoints, (req, res) => res.send('Endpoint Available!'));
app.listen(port, () => console.log(`Express toy listening on port ${port}!`));
console.log("Endpoints are the " + N + "th Fibonacci number and prime factors of " + N + ": ");
console.log(unique_endpoints);
console.log("CTRL-C to exit");

