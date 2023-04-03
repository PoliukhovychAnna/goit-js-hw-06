const boxes = document.querySelector("#boxes")
const numOfBoxes = document.querySelector("input")
const create = document.querySelector("button[data-create]")
const destroy = document.querySelector("button[data-destroy]");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = `<div style = "background-color: ${getRandomHexColor()}; width: ${size}px; height:${size}px" ></div>`;
    boxes.insertAdjacentHTML("beforeend", box);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = "";
}
  
create.addEventListener("click", () => {
  const amount = parseInt(numOfBoxes.value);
    createBoxes(amount);
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});

