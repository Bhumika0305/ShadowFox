// Contact form submit handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you, Bhumika! Your message has been sent (this is a demo).");
  this.reset();
});

// Typing effect for About section
const typingElement = document.querySelector(".typing-text");
const phrases = [
  "Web Developer 💻",
  "Aspiring Data Scientist 📊",
  "Tech Explorer 🔍",
];
let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    letterIndex--;
  } else {
    letterIndex++;
  }

  typingElement.textContent = currentPhrase.substring(0, letterIndex);

  if (!isDeleting && letterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1200); // pause before deleting
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 400);
  } else {
    setTimeout(type, isDeleting ? 60 : 120);
  }
}

type();
