// ====================================
// 1. PASSWORD SETTINGS
// ====================================

const PASSWORD = "sambhavyaa2106";

const lockScreen = document.getElementById("lockScreen");
const website = document.getElementById("website");
const passwordInput = document.getElementById("passwordInput");
const errorMessage = document.getElementById("error");

const unlockBtn = document.getElementById("unlockBtn");

function unlock() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === PASSWORD) {
    lockScreen.style.display = "none";
    website.style.display = "block";

    document.getElementById("musicPlayer").classList.remove("hidden");

    startHearts();
    startQuiz();

  } else {
    errorMessage.textContent =
      "Oops! Wrong password, try again sweetheart. ♡";

    passwordInput.value = "";
  }
}

unlockBtn.addEventListener("click", unlock);

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    unlock();
  }
});


// ====================================
// 2. MOBILE NAVIGATION
// ====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function() {
    navLinks.classList.remove("active");
  });
});


// ====================================
// 3. 100 REASONS
// ====================================

const reasons = [
  "Because you're my favourite notification.",
  "Because your voice has its own magic.",
  "Because you make words sound beautiful.",
  "Because your shayari is so you.",
  "Because you can make ordinary words feel special.",
  "Because I love teasing you.",
  "Because you're mine.",
  "Because you're someone I want to know more about.",
  "Because your songs stay in my head.",
  "Because you have a way with words.",
  "Because talking to you can make a day feel softer.",
  "Because you deserve the sweetest things.",
  "Because you make me smile without trying.",
  "Because I like hearing you talk.",
  "Because your little compliments make me blush.",
  "Because you have your own kind of charm.",
  "Because you're wonderfully you.",
  "Because I can be silly around you.",
  "Because I want to share random thoughts with you.",
  "Because you make affection feel cute.",
  "Because you have a beautiful way of expressing yourself.",
  "Because I love your dramatic side.",
  "Because you're my favourite distraction.",
  "Because you make me curious about what you'll say next.",
  "Because your voice deserves its own appreciation post.",
  "Because I like your little efforts(haa wahi jo tum nhi krte ho).",
  "Because I love how you comfort me.",
  "Because I love your patience when I’m frustrated or stubborn.",
  "Because I love your honesty even when the truth is hard.",
  "Because you're worth a little extra effort.",
  "Because I like calling you Sami.",
  "Because you have a special place in my thoughts.",
  "Because you make me to send you random messages.",
  "Because I love the way you use words.",
  "Because you're a whole mood.",
  "Because you make my heart feel a little softer.",
  "Because I like learning little things about you.",
  "Because your existence is worth celebrating.",
  "Because you're my favourite person to annoy.",
  "Because I love your poetic side.",
  "Because you make me appreciate little conversations.",
  "Because you're someone I want to cheer for.",
  "Because you deserve forehead kisses.",
  "Because you deserve warm hugs.",
  "Because I want you to be happy.",
  "Because I love your silly moments.",
  "Because you make me want to be affectionate.",
  "Because you're my favourite human to tease.",
  "Because I like the thought of making you smile.",
  "Because you have a lovely imagination.",
  "Because I love your expressive side.",
  "Because you make me want to write love letters.",
  "Because you're my little favourite.",
  "Because I like your presence.",
  "Because you deserve to feel appreciated.",
  "Because I want to celebrate your wins.",
  "Because I want to support your dreams.",
  "Because I want to see you succeed.",
  "Because you deserve patience and kindness.",
  "Because I like your way of thinking.",
  "Because you make me smile at my screen.",
  "Because I love your songs and shayari.",
  "Because you make compliments sound like poetry.",
  "Because you have a beautiful voice.",
  "Because I want to send you virtual kisses.",
  "Because I want to give you the tightest hug.",
  "Because you're someone I can be playful with.",
  "Because you make cute things even cuter.",
  "Because I made this little world for you.",
  "Because I love dreaming about our future together and knowing we’ll build it as a team.",
  "Because I wanted to make you feel special.",
  "Because you're my favourite reason to be cheesy.",
  "Because I love being a little clingy with you.",
  "Because you deserve all the good things.",
  "Because I want to know your favourite things.",
  "Because I like imagining your smile.",
  "Because I want to hear more of your stories.",
  "Because I love your enthusiasm.",
  "Because you make me want to be creative.",
  "Because you deserve a hundred reasons and more.",
  "Because you're someone I don't want to take for granted.",
  "Because I like having you in my little world.",
  "Because you make me want to say sweet things.",
  "Because your happiness matters.",
  "Because I want to remind you that you're enough.",
  "Because I like your unique personality.",
  "Because you are more than just pretty words.",
  "Because I love your little poetic universe.",
  "Because I want to be your cheerleader.",
  "Because you deserve the softest love.",
  "Because I want to keep discovering you.",
  "Because I like the way you make me laugh.",
  "Because I love our little conversations.",
  "Because you're my favourite kind of distraction.",
  "Because I want to make more memories with you.",
  "Because you deserve genuine affection.",
  "Because I love having a reason to make you smile.",
  "Because you are important to me.",
  "Because you're my Sami, silly.",
  "Because there are a hundred reasons, but one simple answer: I love you. ♡"
];

let reasonIndex = 0;

const reasonNumber = document.getElementById("reasonNumber");
const reasonCount = document.getElementById("reasonCount");
const reasonText = document.getElementById("reasonText");

function showReason() {
  reasonNumber.textContent =
    String(reasonIndex + 1).padStart(2, "0");

  reasonCount.textContent =
    `REASON ${String(reasonIndex + 1).padStart(2, "0")} OF ${reasons.length}`;

  reasonText.textContent = reasons[reasonIndex];
}

document.getElementById("nextReason").addEventListener("click", function() {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  showReason();
});

document.getElementById("previousReason").addEventListener("click", function() {
  reasonIndex = (reasonIndex - 1 + reasons.length) % reasons.length;
  showReason();
});

showReason();


// ====================================
// 4. PHOTO LIGHTBOX
// ====================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

document.querySelectorAll(".photo-card img").forEach(photo => {

  photo.addEventListener("click", function() {
    lightboxImage.src = this.src;
    lightbox.classList.add("active");
  });

});

document.getElementById("closeLightbox").addEventListener("click", function() {
  lightbox.classList.remove("active");
});

lightbox.addEventListener("click", function(event) {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
  }
});


// ====================================
// 5. COUPLE QUIZ
// ====================================

const questions = [
  {
    question: "Where did our paths first cross?",
    options: [
      "Instagram group chats (januvan)",
      "Instagram group chats (honeymoon)",
      "Instagram group chats (nightclub)"
    ],
    answer: 0
  },

  {
    question: "What do I used to call you?",
    options: [
      "Sam",
      "Sami",
      "Samrath"
    ],
    answer: 2
  },

  {
    question: "What's my favourite song?",
    options: [
      "tum mile",
      "aaj se teri",
      "tera naam doon"
    ],
    answer: 1
  },

  {
    question: "What's my last periods date?",
    options: [
      "14 oct",
      "12 oct",
      "13 oct"
    ],
    answer: 2
  },

  {
    question: "what's the exact date again met on?",
    options: [
      "16 aug",
      "18 aug",
      "20 aug"
    ],
    answer: 1
  },

  {
    question: "do I love you?",
    options: [
      "yes",
      "a",
      "b"
    ],
    answer: 0
  }
];

let questionIndex = 0;
let score = 0;
let answered = false;

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const quizFeedback = document.getElementById("quizFeedback");

const quizArea = document.getElementById("quizArea");
const quizResult = document.getElementById("quizResult");
const restartQuiz = document.getElementById("restartQuiz");

function startQuiz() {
  questionIndex = 0;
  score = 0;
  answered = false;

  quizArea.classList.remove("hidden");
  quizResult.classList.add("hidden");
  restartQuiz.classList.add("hidden");

  showQuestion();
}

function showQuestion() {
  answered = false;

  const current = questions[questionIndex];

  questionNumber.textContent =
    `QUESTION ${questionIndex + 1} OF ${questions.length}`;

  questionText.textContent = current.question;

  quizFeedback.textContent = "";

  optionsContainer.innerHTML = "";

  current.options.forEach((option, index) => {

    const button = document.createElement("button");

    button.className = "quiz-option";
    button.textContent = option;

    button.addEventListener("click", function() {
      checkAnswer(index, button);
    });

    optionsContainer.appendChild(button);

  });
}

function checkAnswer(selected, clickedButton) {

  if (answered) return;

  answered = true;

  const current = questions[questionIndex];
  const allButtons = document.querySelectorAll(".quiz-option");

  if (selected === current.answer) {
    score++;

    clickedButton.textContent += " ♡ Correct!";
    quizFeedback.textContent = "Awww, that's right! 💗";

  } else {

    clickedButton.textContent += " ♡ Not quite!";

    allButtons[current.answer].textContent += " ← Correct answer";

    quizFeedback.textContent = "Oopsie! Remember this one. 🎀";
  }

  allButtons.forEach(button => {
    button.disabled = true;
  });

  setTimeout(function() {

    questionIndex++;

    if (questionIndex < questions.length) {
      showQuestion();
    } else {
      showQuizResult();
    }

  }, 1300);
}

function showQuizResult() {

  quizArea.classList.add("hidden");
  quizResult.classList.remove("hidden");
  restartQuiz.classList.remove("hidden");

  let message;

  if (score === questions.length) {
    message = "PERFECT SCORE! You know our little story! 🥹💗";
  } else if (score >= 4) {
    message = "Awww! Pretty good, Sami! 🎀";
  } else {
    message = "Hmmmm! Someone needs to pay more attention! 🤭";
  }

  quizResult.innerHTML = `
    <h3>Quiz Completed! ♡</h3>
    <p>You scored ${score} out of ${questions.length}.</p>
    <p>${message}</p>
    <p>Sending you a virtual kiss! 💋</p>
  `;

  heartBurst();
}

restartQuiz.addEventListener("click", startQuiz);


// ====================================
// 6. SECRET MESSAGE
// ====================================

const revealSecret = document.getElementById("revealSecret");
const secretMessage = document.getElementById("secretMessage");

revealSecret.addEventListener("click", function() {

  secretMessage.classList.remove("hidden");

  revealSecret.textContent = "You found my secret! ♡";

  heartBurst();

});


// ====================================
// 7. RANDOM SURPRISES
// ====================================

const surprises = [
  "Come here, you! I owe you approximately 1000 hugs. 🫂",
  "Breaking news: Samrat is officially too cute to handle. 🎀",
  "Reminder: drink water, handsome. ♡",
  "Sending you one forehead kiss and a million more. 💋",
  "I hope something makes you smile today. 💗",
  "Stop being so adorable. It's distracting. 🤭",
  "If I could, I'd give you the biggest hug right now.",
  "You are loved, appreciated and mildly annoying. ♡",
  "A tiny reminder that I'm cheering for you!",
  "Your daily dose of affection has arrived. 🎀",
  "Go smile in the mirror. I bet it's cute.",
  "I hereby demand one virtual hug from you!",
  "Sami, you're someone's favourite human. Just saying.",
  "Sending you a pocket full of pink hearts.",
  "You deserve a peaceful, happy day. 💗",
  "Imagine me giving you the tightest hug ever.",
  "Hey you, pretty boy! Take care of yourself.",
  "I hope your dreams turn into beautiful realities.",
  "You + a happy smile = my favourite combination.",
  "Okay, now come collect your kisses. 💋"
];

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", function() {

  const randomIndex = Math.floor(Math.random() * surprises.length);

  surpriseMessage.textContent = surprises[randomIndex];

  heartBurst();

});


// ====================================
// 8. MUSIC PLAYER
// ====================================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");

musicButton.addEventListener("click", async function() {

  if (music.paused) {

    try {

      await music.play();

      musicButton.textContent = "❚❚";
      musicLabel.textContent = "Playing for you ♡";

    } catch (error) {

      musicLabel.textContent = "Check your music file ♡";

    }

  } else {

    music.pause();

    musicButton.textContent = "▶";
    musicLabel.textContent = "A song for you ♡";

  }

});


// ====================================
// 9. FLOATING HEARTS
// ====================================

let heartInterval = null;

function createHeart() {

  const heart = document.createElement("div");

  heart.className = "heart";

  const symbols = ["♡", "♥", "💗", "💕", "୨୧"];

  heart.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize =
    (15 + Math.random() * 20) + "px";

  heart.style.color = [
    "#e77da3",
    "#f2a8c2",
    "#d98ba8"
  ][Math.floor(Math.random() * 3)];

  document.body.appendChild(heart);

  setTimeout(function() {
    heart.remove();
  }, 5000);

}

function startHearts() {

  if (heartInterval) return;

  heartInterval = setInterval(createHeart, 700);

}

function heartBurst() {

  for (let i = 0; i < 18; i++) {

    setTimeout(createHeart, i * 70);

  }

}
