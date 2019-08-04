// https://www.codewars.com/kata/the-observed-pin/train/javascript

const pairs = {
  "1": ["1", "2", "4"],
  "2": ["1", "2", "3", "5"],
  "3": ["2", "3", "6"],
  "4": ["1", "4", "5", "7"],
  "5": ["2", "4", "5", "6", "8"],
  "6": ["3", "5", "6", "9"],
  "7": ["4", "7", "8"],
  "8": ["5", "7", "8", "9", "0"],
  "9": ["6", "8", "9"],
  "0": ["0", "8"]
};

function getPINs(observed) {
  if(observed.length === 1) return pairs[observed];

  let pins = [];
  const digits = observed.split("");
  digits.map((digit, index) => {
    pins[index] = pairs[digit][0].toString();
    for(let i = 0;i < digits.length;i++) {
      pins[index] += pairs[digit][i];
    }
    // 1 - [1, 2, 4]
    // 2 - [1, 2, 3, 5]
  });  
  return pins
};


console.log(getPINs("12"));
