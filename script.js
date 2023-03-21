const buttons = document.querySelectorAll(".tablinks");
const imgTag = document.querySelector("img");

buttons.forEach((button) => {
  button.addEventListener("click", displayImage);
});

function displayImage(e) 