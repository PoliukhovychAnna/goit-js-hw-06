const input = document.querySelector("input")
input.addEventListener("blur", () => {
    if (input.value.trim().length === Number.parseInt(input.dataset.length)) {
        input.classList.remove("invalid")
        input.classList.add("valid")
    } else {
input.classList.add("invalid");
    } 
})
