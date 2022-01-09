const fs = require("fs");

function readInputFromFile() {
  var fs = require("fs");
  return fs.readFileSync("./daythree.txt").toString().split("\n");
}

let inputsCount = 0;
let positionCounts = fillEmptyArray(12);
let positionValue = fillEmptyArray(12);
let secondPositionValue = fillEmptyArray(12);

function fillEmptyArray(length) {
  return [...new Array(length)].map(() => 0);
}

readInputFromFile().forEach((binaryInput) => {
  inputsCount++;
  let cleanBinaryInput = binaryInput.trim();
  for (let i = 0; i < cleanBinaryInput.length; i++) {
    if (parseInt(cleanBinaryInput[i]) == 1) {
      positionCounts[i]++;
    }
  }
});

positionCounts.forEach((position, index) => {
  position > inputsCount / 2
    ? (positionValue[index] = 1)
    : (secondPositionValue[index] = 1);
});

let diagnosticValue =
  parseInt(positionValue.join(""), 2) *
  parseInt(secondPositionValue.join(""), 2);

console.log("diagnostic value", diagnosticValue);
