// https://www.codewars.com/kata/54da5a58ea159efa38000836
/*
function findOdd(A) {
  let count;
  let oddOne;
  A.map(a => {
    count = 0;
    for(let i=0; i<A.length; i++) {
      if(a === A[i]) {
        count++;
      }
    }
    if(count % 2 !== 0) {
      oddOne = a;
    }
  });
  return oddOne;
}
*/

function findOdd(A) {
  let obj = {};
  A.map(a => obj[a] ? obj[a]++ : obj[a] = 1);

  for(prop in obj) {
    if (obj[prop] % 2 !== 0) return Number(prop);
  }
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
