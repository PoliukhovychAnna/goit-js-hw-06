const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements

  if (email.value === "" || password.value === "") {
     alert("Please fill in all the fields!");
  } else {
     console.log({
      [email.name]: email.value,
      [password.name]: password.value,
    });
  }
  
  event.currentTarget.reset();
}
 
