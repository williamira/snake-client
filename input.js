const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') { // if users presses ctrl c the game will end
    process.exit()
  }
};

module.exports = {setupInput, handleUserInput};