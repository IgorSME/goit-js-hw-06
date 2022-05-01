const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngrEl = ingredients.map(el => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.textContent = el;
  ingredientsEl.classList.add("item")
  
  return ingredientsEl;
})

console.log(makeIngrEl);
const makeIngredientsList = document.querySelector('#ingredients');
makeIngredientsList.append(...makeIngrEl);