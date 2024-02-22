const IP = 'localhost' 
const PORT = 50541

// To put all of the movement keys into a variable so that in input.js they can be called by referencing this object
const MOVEMENT_KEYS = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
}
// To put all of the message keys into a variable so that in input.js they can be called by referencing this object
const KEY_MESSAGE_MAPPINGS = {
  z: "Say: So much fun!",
  y: "Say: You're all amazing",
  x: "Say: WoooHoo",
  u: "Say: WINNER",
  v: "Say: OOO TASTY!"
}



module.exports = {
  IP,
  PORT,
  MOVEMENT_KEYS,
  KEY_MESSAGE_MAPPINGS
};