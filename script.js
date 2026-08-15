const avatarImg = document.querySelector('#avatar');
const greetingText = document.querySelector('#greeting');
const affirmationText = document.querySelector('#affirmation-text');
const affirmationBtn = document.querySelector('#affirmation-btn');

const affirmations = [
  "You are capable of more than you know.",
  "Every day is a fresh start.",
  "You bring something unique to this world.",
  "You are allowed to take up space.",
  "Small steps still move you forward.",
  "You have overcome hard things before.",
  "Your feelings are valid.",
  "You are enough, exactly as you are.",
  "Growth takes time — be patient with yourself.",
  "Today you showed up. That matters.",
  "You are worthy of kindness, especially from yourself.",
  "Your potential has no ceiling.",
  "Rest is productive too.",
  "You are not behind. You are on your own path.",
  "Something good is coming your way."
];

function setGreeting() {
  const hour = new Date().getHours(); // gets the current hour (0-23)
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning! ☀️";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon! 🌤️";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good evening! 🌙";
  } else {
    greeting = "Hello, night owl! 🦉";
  }

  greetingText.textContent = greeting;
}

function showAffirmation() {
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  const chosen = affirmations[randomIndex];

  // Fade out, swap text, fade back in
  affirmationText.style.opacity = 0;

  setTimeout(function() {
    affirmationText.textContent = chosen;
    affirmationText.style.opacity = 1;
  }, 400);

  // Trigger the bounce animation on the avatar
  avatarImg.classList.add('bouncing');
  setTimeout(function() {
    avatarImg.classList.remove('bouncing');
  }, 500);
}

affirmationBtn.addEventListener('click', function() {
  showAffirmation();
});

setGreeting();
showAffirmation();