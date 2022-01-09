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

let horizontalPositionTwo = 0;
let aim = 0;
let depth = 0;

//down increases aim by x
//down decreases aim by x

//forward increases horizontal position by x
//forward increases your depth by your aim multiplied by X

readInputFromFile().forEach((element) => {
  switch (getDirection(element)) {
    case "forward":
      horizontalPositionTwo += getDistance(element);
      depth += getDistance(element) * aim;
      break;
    case "up":
      aim -= getDistance(element);
      break;
    case "down":
      aim += getDistance(element);
      break;
  }
});

console.log("position", depth * horizontalPositionTwo);
