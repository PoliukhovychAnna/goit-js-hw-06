const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

// console.log(list);
// const li = document.createElement("li");
const createList = ingredients.forEach(el => {
  const li = document.createElement("li");
  li.textContent = el;
  li.classList.add("item");
  console.log(li);
  list.append(li);
})

console.log(list);
