// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript


function sumStrings(a,b) {
  let digitsA = a.split("").reverse();
  let digitsB = b.split("").reverse();
  let counter = 0;
  let carry = 0, sum = [];
  while(counter < digitsA.length || counter < digitsB.length) {
    let sumTemp = (Number(digitsA[counter]) || 0) + (Number(digitsB[counter]) || 0) + carry;
    if(sumTemp > 9) {
      carry = 1;
      sum.push(sumTemp - 10);
    } else {
      carry = 0;
      sum.push(sumTemp);
    }
    counter++;    
  }
  sum = sum.reverse().join("");
  let output = carry ? `1${sum}` : sum;
  output = output[0] === "0" ? parseInt(output).toString() : output;
  return output;
};

// console.log(sumStrings('712569312664357328695151392','8100824045303269669937'));
console.log(sumStrings('00103','08567'));