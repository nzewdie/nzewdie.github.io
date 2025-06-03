// Typed Text Animation (only runs on index.html)
const typedText = document.getElementById("typed-text");

if (typedText) {
  const phrases = ["Software Developer", "Full-Stack Developer", "Data Scientist"];
  let phraseIndex = 0;
  let letterIndex = 0;

  function type() {
    if (letterIndex < phrases[phraseIndex].length) {
      typedText.textContent += phrases[phraseIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(erase, 2000);
    }
  }

  function erase() {
    if (letterIndex > 0) {
      typedText.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
      letterIndex--;
      setTimeout(erase, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(type, 500);
    }
  }

  type();
}

// Dark Mode Toggle
// --- DARK MODE PERSISTENCE ---
const toggleBtn = document.getElementById("toggle-dark");
const themeIcon = document.getElementById("theme-icon");

// Load theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.textContent = "☀️";
  themeIcon.classList.remove("moon-bg");
  themeIcon.classList.add("sun-bg");
} else {
  themeIcon.textContent = "🌙";
  themeIcon.classList.add("moon-bg");
  themeIcon.classList.remove("sun-bg");
}

// Handle toggle + animation
toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  // Add spin animation class
  themeIcon.classList.add("spin");

  // Update icon and background classes with delay
  setTimeout(() => {
    if (isDark) {
      themeIcon.textContent = "☀️";
      themeIcon.classList.remove("moon-bg");
      themeIcon.classList.add("sun-bg");
    } else {
      themeIcon.textContent = "🌙";
      themeIcon.classList.add("moon-bg");
      themeIcon.classList.remove("sun-bg");
    }
    themeIcon.classList.remove("spin");
  }, 200);

  // Save preference
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

  
// Scroll Fade-in Animation
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
