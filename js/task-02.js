const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngrEl = product => {
  return product.map(el => {
    const ingredientsEl = document.createElement("li");
    ingredientsEl.textContent = el;
    ingredientsEl.classList.add("item")
  
    return ingredientsEl;
  })
}
const makeIngrArr = makeIngrEl(ingredients);
// console.log(makeIngrEl);
const makeIngredientsList = document.querySelector('#ingredients');
makeIngredientsList.append(...makeIngrArr);