// https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript

function isValidWalk(walk) {
  //insert brilliant code here
  if(walk.length <= 10 && walk.length !== 0) {
    let count1 = 0;
    let count2 = 0;

    walk.map(dir => {
      if(dir === walk[0]) {
        count1++;
      } else if(dir === walk[1]) {
        count2++;
      }
    });
    if(count1 === count2) {
      return true
    }
    return false;
  }
  return false;
}

console.log(isValidWalk([]));
// console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))