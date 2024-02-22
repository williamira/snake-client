const { connect } = require('./client') // to extract the connect function from client.js

const { setupInput } = require('./input') // to extract the setUpInput and handleUserInput functions from input.js

connect() // calling the connect function




setupInput(); // calling the input function

console.log("Connecting ...");