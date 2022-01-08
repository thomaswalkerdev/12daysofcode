const fs = require("fs");

function readInputFromFile() {
  var fs = require("fs");
  return fs.readFileSync("./dayone.txt").toString().split("\n");
}

let increaseCount = 0;
let previousDepth = Number.MAX_VALUE;
readInputFromFile().forEach((depth, index) => {
  if (index != 0 && parseInt(depth) > parseInt(previousDepth)) {
    increaseCount++;
  }
  previousDepth = depth;
});

console.log("increase count", increaseCount);

let values = readInputFromFile();
let secondIncreaseCount = 0;
let firstWindowValue = parseInt(values[0]);
let secondWindowValue = parseInt(values[1]);
let thirdWindowValue = parseInt(values[2]);

values.forEach((depth, index) => {
  if (index > 2) {
    let threeValueWindow =
      firstWindowValue + secondWindowValue + thirdWindowValue;
    firstWindowValue = secondWindowValue;
    secondWindowValue = thirdWindowValue;
    thirdWindowValue = parseInt(depth);
    let secondThreeValueWindow =
      firstWindowValue + secondWindowValue + thirdWindowValue;

    if (threeValueWindow < secondThreeValueWindow) {
      secondIncreaseCount++;
    }
  }
});

console.log("second increase count", secondIncreaseCount);
