// https://www.codewars.com/kata/pete-the-baker/train/javascript

function cakes(recipe, available) {
  let maxOutputs = [];
  const recipeArr = Object.keys(recipe);
  const availableArr = Object.keys(available);

  if(recipeArr.length > availableArr.length) return 0;

  availableArr.map(key => {
    if(recipe.hasOwnProperty(key)) {
      maxOutputs.push(available[key] / recipe[key]);
    }
  });

  return Math.floor(Math.min(...maxOutputs));
}


let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let available = {sugar: 500, flour: 2000, milk: 2000};

// let recipe = {flour: 500, sugar: 200, eggs: 1};
// let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));
    