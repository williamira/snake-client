const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541 
  });

  conn.on("data", (data) => {
    console.log(data);
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {connect: connect};