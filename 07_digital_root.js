// https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/javascript

function digital_root(n) {
  const sum = n.toString().split("").reduce((x, y) => +x + +y);  
  if(sum >= 10) return digital_root(sum) 
  return sum;
}

console.log(digital_root(16));