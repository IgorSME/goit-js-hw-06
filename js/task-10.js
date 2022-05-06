const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const divEl = document.querySelector('div#boxes')
const inputEl = document.querySelector('input')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const boxes = [];
  let width = 30;
  let height = 30;
  
  for (let i = 0; i < amount; i += 1){
    const box = document.createElement('div');
    
    let divRatio = divEl.children.length;
    box.style.width = `${width + divRatio * 10}px`;
    box.style.height = `${height + divRatio * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  
    divEl.append(box);
    console.log(box);
  }
  // divEl.append(...boxes);
  
}

function destroyBoxes() { 
  divEl.innerHTML = "";
}

btnCreate.addEventListener('click', onGetAmount)
function onGetAmount() {
  const amount = +inputEl.value;
  createBoxes(amount)
}

btnDestroy.addEventListener('click', destroyBoxes)