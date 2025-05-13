// script.js

const quoteBtn = document.getElementById("quoteBtn");
const quoteDisplay = document.getElementById("quote");
const dietForm = document.getElementById("dietForm");
const dietInput = document.getElementById("dietInput");
const dietList = document.getElementById("dietList");
const slideImage = document.getElementById("slideImage");
const nextImage = document.getElementById("nextImage");
const accordionToggle = document.querySelector(".accordion-toggle");
const accordionContent = document.querySelector(".accordion-content");
const signupForm = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const validationMessage = document.getElementById("validationMessage");

const quotes = [
  "The happiness of your life depends upon the quality of your thoughts. – Marcus Aurelius",
  "He who angers you conquers you. – Elizabeth Kenny",
  "You have power over your mind – not outside events. Realize this, and you will find strength. – Marcus Aurelius",
  "First say to yourself what you would be; and then do what you have to do. – Epictetus"
];

const images = [
    "images/bright-fruits.jpg",
    "images/nuts.jpg",
    "images/mixed-veg.jpg",
    "images/veg-bowl.jpg",
    "images/veg-eggs-beans.jpg",
    "images/veg&eggs.jpg"
  ];
  
  
let imageIndex = 0;

// Event: Button click
quoteBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  quoteDisplay.textContent = quotes[random];
});

// Event: diet form submit
dietForm.addEventListener("submit", e => {
  e.preventDefault();
  if (dietInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = dietInput.value;
  li.addEventListener("dblclick", () => li.classList.toggle("completed")); // Bonus: Double-click
  dietList.appendChild(li);
  dietInput.value = "";
});

// Event: Keypress detection
dietInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    dietForm.dispatchEvent(new Event("submit"));
  }
});

// Event: Image slideshow
nextImage.addEventListener("click", () => {
  imageIndex = (imageIndex + 1) % images.length;
  slideImage.src = images[imageIndex];
});

// Accordion toggle
accordionToggle.addEventListener("click", () => {
  accordionContent.classList.toggle("open");
});

// Signup form validation
signupForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!email.value.includes("@")) {
    validationMessage.textContent = "Invalid email format.";
    return;
  }
  if (password.value.length < 8) {
    validationMessage.textContent = "Password must be at least 8 characters.";
    return;
  }
  validationMessage.textContent = "Signup successful!";
});

// Real-time feedback
password.addEventListener("input", () => {
  validationMessage.textContent = password.value.length < 8 ?
    "Password too short." : "Looks good!";
});
