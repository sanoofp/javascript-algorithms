// https://www.codewars.com/kata/is-a-number-prime/train/javascript


// function isPrime(num) {
//   let start = 2;
//   const limit = Math.sqrt(num);
  
//   for(start; start <= limit;) {
//     if(num % start++ < 1) return false;
//   }

//   return num > 1;
// }

function isPrime(num) {
  const limit = Math.sqrt(num);
  for(let i = 2; i <= limit; i++)
    if(num % i === 0) return false;
  
  return num > 1;
}

console.log(isPrime(6))

