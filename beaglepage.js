let dropdown = document.querySelector(".dropdown-content");
let dropdown2 = document.querySelector(".dropdown-content2");
let dropdown3 = document.querySelector(".dropdown-content3");
let button = document.querySelector(".dropdown-btn");
let button2 = document.querySelector(".dropdown-btn2");
let button3 = document.querySelector(".dropdown-btn3");

button.addEventListener("click", function () {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});

button2.addEventListener("click", function () {
  if (dropdown2.style.display === "none") {
    dropdown2.style.display = "block";
  } else {
    dropdown2.style.display = "none";
  }
});

button3.addEventListener("click", function () {
  if (dropdown3.style.display === "none") {
    dropdown3.style.display = "block";
  } else {
    dropdown3.style.display = "none";
  }
});
