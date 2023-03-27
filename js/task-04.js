let less = document.querySelector("button[data-action = 'decrement']")
let more = document.querySelector("button[data-action = 'increment']");
let counterValue = document.querySelector("#value")
let value = 0;


less.addEventListener("click", () => {
    value -= 1
    counterValue.textContent = value;
})

more.addEventListener("click", () => {
    value += 1
  counterValue.textContent = value;
});
