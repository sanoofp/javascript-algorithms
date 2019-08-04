String.prototype.capitalize = function() {
  const word = this.valueOf();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

String.prototype.isEmptyOrSpaces = function() {
  const string = this.valueOf();
  if(string.trim().length === 0) return true;
}

function generateHashtag (str) {
  if(str.isEmptyOrSpaces()) return false;

  let hashtag = "#";
  str.replace(/\s\s+/g, " ").split(" ").map(word => {
    hashtag += word.capitalize();
  });
  return hashtag.length > 140 ? false : hashtag;
}

// console.log(generateHashtag("Do    We have A Hashtag"));
console.log(generateHashtag("     "));
