// const fs = require("fs");

// function readInputFromFile() {
//   var fs = require("fs");
//   return fs.readFileSync("./daythree.txt").toString().split("\n");
// }

let positionCounts = fillEmptyArray(12);
let positionValue = fillEmptyArray(12);
let secondPositionValue = fillEmptyArray(12);

function fillEmptyArray(length) {
  return [...new Array(length)].map(() => 0);
}

readInputFromFile().forEach((binaryInput) => {
  let cleanBinaryInput = binaryInput.trim();
  for (let i = 0; i < cleanBinaryInput.length; i++) {
    if (cleanBinaryInput[i] === "1") {
      positionCounts[i]++;
    }
  }
});

// positionCounts.forEach((position, index) => {
//   position > inputsCount / 2
//     ? (positionValue[index] = 1)
//     : (secondPositionValue[index] = 1);
// });

// let diagnosticValue =
//   parseInt(positionValue.join(""), 2) *
//   parseInt(secondPositionValue.join(""), 2);

// console.log("diagnostic value", diagnosticValue);
function readInputFromFile() {
  var fs = require("fs");
  return fs.readFileSync("./daythree.txt").toString().split("\n");
}

let binaries = readInputFromFile();
console.log("positioncounts", positionCounts, binaries.length);
let filterBinaries = binaries.map((x) => x.trim());
let binariesLeft = [];
let binariesLeft2 = [];

let isOnex = positionCounts[0] > binaries.length / 2;
filterBinaries.forEach((b) => {
  isOnex && b[0] === "1" ? binariesLeft.push(b) : binariesLeft2.push(b);
});

let oxygenValue = 0;
let co2Value = 0;

let binvalue = "";
positionCounts.forEach((x) => {
  if (x > binaries.length / 2) {
    binvalue += "1";
  } else {
    binvalue += "0";
  }
});

console.log("bin value", binvalue);

let count = 0;
positionCounts.forEach((position, index) => {
  let isOne = position > binaries.length / 2;
  let oxygenBinaries = [];
  let co2Binaries = [];
  binariesLeft.forEach((left) => {
    if ((isOne && left[index] === "1") || (!isOne && left[index] === "0")) {
      oxygenBinaries.push(left);
    }
  });

  binariesLeft2.forEach((left) => {
    if ((isOne && left[index] !== "1") || (!isOne && left[index] !== "0")) {
      co2Binaries.push(left);
    }
  });

  binariesLeft = oxygenBinaries;
  binariesLeft2 = co2Binaries;

  if (binariesLeft.length === 1) {
    oxygenValue = parseInt(binariesLeft[0], 2);
    console.log("oxygen", binariesLeft);
  }

  if (binariesLeft2.length === 1) {
    co2Value = parseInt(binariesLeft2[0], 2);
    console.log("co2", binariesLeft2);
  }
});

console.log(
  "final values",
  oxygenValue,
  co2Value,
  oxygenValue * co2Value,
  count
);

const { input } = require("./input");

let oxy = [...input];
let co2 = [...input];

function getMinsMaxes(lines) {
  let count = {};

  for (let line of lines) {
    for (let i = 0; i < line.length; i++) {
      if (!count[i]) {
        // Initialize [zeros_count, ones_count]
        count[i] = [0, 0];
      }

      let val = +line[i];
      count[i][val]++;
    }
  }

  let mins = [];
  let maxs = [];
  console.log("counts", Object.values(count));
  for (let counts of Object.values(count)) {
    if (counts[0] === counts[1]) {
      maxs.push(null);
      mins.push(null);
    } else if (counts[0] > counts[1]) {
      maxs.push("0");
      mins.push("1");
    } else {
      maxs.push("1");
      mins.push("0");
    }
  }
  return {
    min: mins,
    max: maxs,
  };
}

let bit = 0;
while (oxy.length > 1) {
  let { max } = getMinsMaxes(oxy);
  oxy = oxy.filter((num) => {
    return max[bit] === null ? num[bit] === "1" : num[bit] === max[bit];
  });

  bit++;
}

const oxy_rating = parseInt(oxy[0], 2);

bit = 0;
while (co2.length > 1) {
  let { min } = getMinsMaxes(co2);

  co2 = co2.filter((num) => {
    return min[bit] === null ? num[bit] === "0" : num[bit] === min[bit];
  });
  bit++;
}

const co2_rating = parseInt(co2[0], 2);

console.log(oxy_rating, co2_rating, oxy_rating * co2_rating);
