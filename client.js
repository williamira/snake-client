const { Server } = require("http");
const net = require("net");
const { IP, PORT } = require("./constants");


// to create an object which will be returned to allow us to send and recieve input with server
const connect = function () {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });

    // to recieve messages from the server when an event with data occurs
  conn.on("data", (data) => { 
    console.log(data); 
  })
  // to log a message so that we know we have connected to server when the connection event happens
  conn.on("connect", () => { 
    console.log("Successfully connected to game server");
    
  })
  // To name the snake player
  conn.write("Name: WIC") 
  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};

module.exports = {connect};