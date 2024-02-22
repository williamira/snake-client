const { stdin } = require("process");

let connection;

const setupInput = function (conn) { // to create a way to add input from client to server
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) { // a function to handle user input such as moving snake or sending messages into the game
  if (data === '\u0003') { // if users presses ctrl c the game will end
    process.exit()
  }
  if (data === 'w') {
    connection.write("Move: up") 
  }
  if (data === 'a') {
    connection.write("Move: left")
  }
  if (data === 's') {
    connection.write("Move: down")
  }
  if (data === 'd') {
    connection.write("Move: right")
  }
  if (data === 'p') {
    connection.write("Say: I love to party")
  }
  if (data === 'y') {
    connection.write("Say: YEEEHAA")
  }
  if (data === 'u') {
    connection.write("Say: I am a winner")
  }
  if (data === 'o') {
    connection.write("Say: Ohh thats tasty")
  }
  if (data === 'l') {
    connection.write("Say: love yall")
  }
};


module.exports = {setupInput, handleUserInput};