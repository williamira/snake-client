const { stdin } = require("process");

const { MOVEMENT_KEYS, KEY_MESSAGE_MAPPINGS } = require('./constants');

let connection;

const setupInput = function(conn) { // to create a way to add input from client to server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(data) { // a function to handle user input such as moving snake or sending messages into the game
  if (data === '\u0003') { // if users presses ctrl c the game will end
    process.exit();
  }
  // to create a variable with a key-value pair of the movement_keys objects depending on which key is pressed during game(w, a, s, d)
  const direction = MOVEMENT_KEYS[data]; 

  // to create a variable with a key-value pair of the key_message_mappings objects depending on which key is pressed during game(z, y, x, v, u)
  const messageToSend = KEY_MESSAGE_MAPPINGS[data];

  // if the direction variable is true then send the value of that key to the sercer ie: 'w = Move: up'
  if (direction) {
    connection.write(`${direction}`);
  }
  // if the messageToSend variable is true then send a message to the server that should be displayed ie: 'z: So much fun!'
  if (messageToSend) {
    connection.write(`${messageToSend}`)
  }
};


module.exports = { setupInput, handleUserInput };