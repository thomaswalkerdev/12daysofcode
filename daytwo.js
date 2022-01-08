const fs = require("fs");

function readInputFromFile() {
  var fs = require("fs");
  return fs.readFileSync("./daytwo.txt").toString().split("\n");
}

let horizontalPosition = 0;
let verticalPosition = 0;

readInputFromFile().forEach((element) => {
  switch (getDirection(element)) {
    case "forward":
      horizontalPosition += getDistance(element);
      break;
    case "up":
      verticalPosition -= getDistance(element);
      break;
    case "down":
      verticalPosition += getDistance(element);
      break;
  }
});

function getDirection(direction) {
  return direction.split(" ")[0];
}

function getDistance(distance) {
  return parseInt(distance.split(" ")[1].split("/")[0]);
}

console.log("position", verticalPosition * horizontalPosition);
