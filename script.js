// =============================
// Dark Mode
// =============================

const button = document.getElementById("darkModeBtn");

button.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }

});

// =============================
// Typing Animation
// =============================

const text = [
    "Java Developer",
    "AI Enthusiast",
    "3rd Year CSE Student",
    "Future Software Engineer"
];

let wordIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeEffect() {

    if (charIndex < text[wordIndex].length) {

        typingElement.innerHTML += text[wordIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect() {

    if (charIndex > 0) {

        typingElement.innerHTML =
            text[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        wordIndex++;

        if (wordIndex >= text.length) {

            wordIndex = 0;

        }

        setTimeout(typeEffect, 300);

    }

}

typeEffect();

// =============================
// Animated Skill Bars
// =============================

window.onload = function () {

    document.querySelector(".java").style.width = "90%";

    document.querySelector(".html").style.width = "85%";

    document.querySelector(".css").style.width = "80%";

    document.querySelector(".js").style.width = "70%";

    document.querySelector(".mysql").style.width = "80%";

};