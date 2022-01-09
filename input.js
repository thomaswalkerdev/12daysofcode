const path = require("path");
const fs = require("fs");

// Just use strings
const input = fs
  .readFileSync("./daythree.txt", "utf8")
  .toString()
  .trim()
  .split("\n");

module.exports = {
  input,
};
