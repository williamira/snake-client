const { Server } = require("http");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541 
  });

  conn.on("data", (data) => {
    console.log(data);
  })

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    
  })

  conn.write("Name: WIC")
  // interpret incoming data as text
  conn.setEncoding("utf8");


  return conn;
};

module.exports = {connect};