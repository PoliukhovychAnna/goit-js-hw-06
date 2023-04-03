let button = document.querySelector(".change-color");
let bodyEl = document.querySelector("body");
let colorName = document.querySelector(".color")

button.addEventListener(
  "click",
  () => {
    colorName.textContent = getRandomHexColor(),
      bodyEl.style.backgroundColor = colorName.textContent
  },
)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

