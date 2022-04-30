const listEl = document.querySelector('#categories');
console.log(listEl);
console.log(` Number of categories: ${listEl.children.length}`);

// console.log(listEl.children);


const liEl = document.querySelectorAll("li.item")
liEl.forEach(el => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
}
)

