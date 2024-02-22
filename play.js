const { connect } = require('./client'); // to extract the connect function from client.js

const { setupInput } = require('./input'); // to extract the setUpInput and handleUserInput functions from input.js

console.log("Connecting ...");


const conn = connect(); // calling the connect function and storing its result in a variable to be used 


setupInput(conn); // calling the input function with an argument of the conn variable
