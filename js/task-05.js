const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (evt) => {
    if (evt.currentTarget.value.trim() === "") {
        textOutput.textContent = "Anonymous";
    } else {
textOutput.textContent = evt.currentTarget.value;
    }
})
