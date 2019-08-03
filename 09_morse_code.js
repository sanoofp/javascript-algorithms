const MORSE_CODE = require("./data/morse_code.json");

const decodeMorse = function(morseCode) {
  /* SOLUTION 1 
  let spaces = 0;
  let output = "";
  morseCode = morseCode.trim();
  morseCode.split(" ").map((morse, index) => {
    morse.length === 0 ? spaces++ : output += MORSE_CODE[morse];
    if(spaces >= 2) {
      spaces = 0;
      output += " ";
    }
  }); 
  */

  /* SOLUTION 2 */
  
  return morseCode.trim().split("   ").map(words => words.split(" ").map(chars => MORSE_CODE[chars]).join("")).join(" ");

}

// decodeMorse(" . "); // E
decodeMorse('.... . -.--   .--- ..- -.. .'); // HEY JUDE