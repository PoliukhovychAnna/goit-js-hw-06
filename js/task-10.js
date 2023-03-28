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
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    size += 10;
  }
}
console.log(boxes);

function destroyBoxes() {
  boxes.remove();
}
  
create.addEventListener("click", () => {
  const amount = parseInt(numOfBoxes.value);
    createBoxes(amount);
  
});

destroy.addEventListener("click", () => {
  destroyBoxes();
});