// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(str){
  let newStr = [];
  str.split(" ").map(word => {
    const digit = Number(word.match(/\d+/g));
    newStr[digit - 1] = word;
  });
  console.log(newStr.join(" "));
}
// order("4of Fo1r pe6ople g3ood th5e the2")
// order("is2 Thi1s T4est 3a");
order("1 2 3 4 5");