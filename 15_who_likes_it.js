// https://www.codewars.com/kata/who-likes-it/train/javascript
// 6 kyu

  function likes(names) {
    if(names.length === 0) return "no one likes this";
    else if(names.length == 1) return `${names[0]} like this`;
    else if(names.length < 4) {
      const lastName = names.splice(names.length - 1, 1);
      return `${names.join(", ")} and ${lastName} like this`
    }
    
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;

  }

// console.log(likes([]), ' === no one likes this');
// console.log(likes(['Peter']), '\nPeter likes this');
// console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
// console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), '\nAlex, Jacob and 2 others like this');