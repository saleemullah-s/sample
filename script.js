// --------------------
// Configuration
// --------------------
const lovedOneName = "En Pondatiiyaeeeeee ❤️"; // ← put her real name here

// --------------------
// DOM Elements
// --------------------
const textElement = document.getElementById("text");
const btn = document.getElementById("nextBtn");
const music = document.getElementById("bgMusic");
const finalScreen = document.getElementById("finalScreen");
const finalNameSpan = document.getElementById("finalName");

// --------------------
// Scene Texts
// --------------------
const scenes = [
  "Some people enter your life unexpectedly…",
  "And slowly, they become your favorite part of every day.",
  "Your smile started feeling like home.",
  "Your voice became my calm after long days.",
  "With you, even silence feels comfortable.",
  "You didn’t just become important… you became irreplaceable.",
  "I love you ❤️ Faaaizu maa.........😘💕",
  "I dream of a future where we build a home filled with peace and love.",
  "A life where we grow together and choose each other every day.",
  "May our story lead to something pure and beautiful.",
  "In Sha Allah, this journey leads us to forever.",
  "Ameen Ya Rabbul Alameen 🤍"
];

let index = 0;

// --------------------
// Button Click Handler
// --------------------
btn.addEventListener("click", () => {
  if (index === 0) music.play(); // Start music on first click

  index++;

  if (index < scenes.length) {
    textElement.style.opacity = 0;
    setTimeout(() => {
      textElement.innerText = scenes[index];
      textElement.style.opacity = 1;
    }, 500);
  } else {
    // Final screen
    document.querySelector(".scene").style.display = "none";
    finalScreen.classList.remove("hidden");

    // Set her name in final screen
    if (finalNameSpan) finalNameSpan.innerText = lovedOneName;

    startHearts();
    createStars(lovedOneName);
  }
});

// --------------------
// Floating Hearts Animation
// --------------------
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.animation = "floatUp 5s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

// --------------------
// Stars Animation
// --------------------
function createStars(name) {
  for (let i = 0; i < name.length; i++) {
    const star = document.createElement("div");
    star.innerHTML = "✨";
    star.className = "star";
    star.style.left = 20 + i * 30 + "%";
    star.style.top = "20%";
    star.style.fontSize = "24px";
    document.body.appendChild(star);
  }
}
