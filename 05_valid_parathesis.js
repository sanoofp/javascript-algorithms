// https://www.codewars.com/kata/valid-parentheses/train/javascript

// function validParentheses(parens){
//   if(parens.length > 0 || parens.length <=100) {
//     return Array(parens.match(/\(+/gi)).join("").length === Array (parens.match(/\)+/gi)).join("").length;
//   }
//   return fal
// }

function validParentheses(parens){
  let count = 0;
  
  for(let i=0;i<parens.length;i++) {
    if(parens[i] === "(") count++;
    else if(parens[i] === ")") count--;
  }
  return count === 0;
}

console.log(validParentheses("()"))