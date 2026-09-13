/* ============================
   WORD BANKS (English + Arabic)
   ============================ */
const WORD_BANK = {
  en: {
    animals: ["lion", "tiger", "zebra", "giraffe", "monkey", "rabbit", "camel", "horse", "eagle", "dolphin", "elephant", "panda", "wolf", "fox", "turtle"],
    fruits: ["apple", "banana", "orange", "grape", "lemon", "mango", "cherry", "peach", "melon", "kiwi", "papaya", "coconut", "pear", "plum", "fig"],
    countries: ["jordan", "egypt", "france", "canada", "brazil", "japan", "india", "spain", "italy", "turkey", "kuwait", "qatar", "sudan", "yemen", "oman"],
    colors: ["red", "blue", "green", "yellow", "purple", "orange", "black", "white", "brown", "silver", "golden", "violet", "indigo", "maroon", "olive"],
    jobs: ["doctor", "teacher", "engineer", "farmer", "lawyer", "artist", "dentist", "pilot", "driver", "chef", "nurse", "police", "singer", "writer", "baker"],
    sports: ["soccer", "tennis", "boxing", "karate", "rugby", "hockey", "cycling", "running", "diving", "archery", "bowling", "cricket", "sailing", "skiing", "wrestling"]
  },
  ar: {
    animals: ["أسد", "نمر", "قرد", "أرنب", "جمل", "حصان", "نسر", "فيل", "ذئب", "ثعلب", "سلحفاة", "دجاجة", "قطة", "كلب", "بقرة"],
    fruits: ["تفاح", "موز", "برتقال", "عنب", "ليمون", "مانجو", "كرز", "خوخ", "بطيخ", "كيوي", "أناناس", "جوافة", "رمان", "تين", "مشمش"],
    countries: ["مصر", "سوريا", "لبنان", "العراق", "الأردن", "السعودية", "الكويت", "قطر", "عمان", "اليمن", "تونس", "المغرب", "الجزائر", "فلسطين", "السودان"],
    colors: ["أحمر", "أزرق", "أخضر", "أصفر", "بنفسجي", "برتقالي", "أسود", "أبيض", "بني", "رمادي", "ذهبي", "فضي", "وردي", "كحلي", "زيتي"],
    jobs: ["طبيب", "معلم", "مهندس", "فلاح", "محامي", "فنان", "طيار", "سائق", "طباخ", "ممرضة", "شرطي", "مغني", "كاتب", "خباز", "نجار"],
    sports: ["تنس", "ملاكمة", "كاراتيه", "هوكي", "دراجة", "جري", "غطس", "رماية", "بولينج", "كريكيت", "إبحار", "تزلج", "مصارعة", "سباحة", "جمباز"]
  }
};

const CATEGORY_ICONS = {
  animals: "🐾", fruits: "🍎", countries: "🌍",
  colors: "🎨", jobs: "💼", sports: "⚽"
};

const CATEGORY_LABELS = {
  en: { animals: "Animals", fruits: "Fruits", countries: "Countries", colors: "Colors", jobs: "Jobs", sports: "Sports" },
  ar: { animals: "حيوانات", fruits: "فواكه", countries: "دول", colors: "ألوان", jobs: "مهن", sports: "رياضات" }
};

/* ============================
   LOCALIZED UI STRINGS
   ============================ */
const STR = {
  en: {
    appTitle: "Guess The Word",
    appSubtitle: "Two players · One device · The word is picked for you. Take turns and collect points.",
    player1Label: "Player 1",
    player2Label: "Player 2",
    languageLabel: "Language",
    categoryLabel: "Category",
    timerLabel: "Timer",
    timerEnableText: "Enable turn timer",
    startBtn: "Start Game",
    guessHeading: "Guess The Word",
    checkGuessBtn: "Check Guess",
    turnLabel: "Turn",
    legendGreen: "Green: correct letter + correct position",
    legendOrange: "Orange: correct letter + wrong position",
    legendGray: "Gray: wrong letter",
    legendBonus: "🎯 Guess the whole word correctly",
    playAgainBtn: "Play Again",
    endGameBtn: "End Game",
    endGameConfirm: "Are you sure you want to end the game now? The player with the higher score will be declared the winner.",
    seconds: n => `⏱ ${n}s`,
    timeUp: name => `⏰ Time's up! ${name} loses this turn.`,
    guessTurn: name => `${name}'s turn to guess`,
    wordLength: n => `The secret word has ${n} letters.`,
    fillAll: "Please fill in all the letters first.",
    earned: (name, points) => `${name} earned ${points} points.`,
    won: name => `🎉 ${name} guessed the word! +20 bonus points.`,
    winnerTitle: name => `🏆 ${name} Wins!`,
    winnerMessage: name => `${name} has the highest score.`,
    draw: "🤝 It's a Draw!",
    drawMessage: "Both players finished with the same score."
  },
  ar: {
    appTitle: "خمّن الكلمة",
    appSubtitle: "لاعبان · جهاز واحد · الكلمة تُختار تلقائياً. تبادلوا الأدوار واجمعوا النقاط.",
    player1Label: "اللاعب الأول",
    player2Label: "اللاعب الثاني",
    languageLabel: "اللغة",
    categoryLabel: "الفئة",
    timerLabel: "الوقت",
    timerEnableText: "تفعيل عدّاد الوقت",
    startBtn: "ابدأ اللعبة",
    guessHeading: "خمّن الكلمة",
    checkGuessBtn: "تحقّق من التخمين",
    turnLabel: "الدور",
    legendGreen: "أخضر: الحرف صحيح والمكان صحيح",
    legendOrange: "برتقالي: الحرف صحيح والمكان خطأ",
    legendGray: "رمادي: الحرف غير موجود",
    legendBonus: "🎯 خمّن الكلمة كاملة",
    playAgainBtn: "العب مرة أخرى",
    endGameBtn: "إنهاء اللعبة",
    endGameConfirm: "متأكد إنك بدك تنهي اللعبة هس؟ اللاعب صاحب النقاط الأعلى بيعتبر الفائز.",
    seconds: n => `⏱ ${n}ث`,
    timeUp: name => `⏰ انتهى الوقت! ${name} خسر هذا الدور.`,
    guessTurn: name => `دور ${name} للتخمين`,
    wordLength: n => `الكلمة السرية مكوّنة من ${n} حرف.`,
    fillAll: "الرجاء تعبئة كل الحروف أولاً.",
    earned: (name, points) => `${name} حصل على ${points} نقطة.`,
    won: name => `🎉 ${name} خمّن الكلمة! +20 نقطة إضافية.`,
    winnerTitle: name => `🏆 ${name} فاز!`,
    winnerMessage: name => `${name} حقق أعلى نتيجة.`,
    draw: "🤝 تعادل!",
    drawMessage: "أنهى اللاعبان اللعبة بنفس النتيجة."
  }
};

/* ============================
   ELEMENT REFERENCES
   ============================ */
const setupScreen = document.getElementById("setup-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const appTitleEl = document.getElementById("app-title");
const appSubtitleEl = document.getElementById("app-subtitle");
const player1LabelEl = document.getElementById("player1-label");
const player2LabelEl = document.getElementById("player2-label");
const languageLabelEl = document.getElementById("language-label");
const categoryLabelEl = document.getElementById("category-label");
const timerLabelEl = document.getElementById("timer-label");
const timerEnableTextEl = document.getElementById("timer-enable-text");

const player1Input = document.getElementById("player1-name");
const player2Input = document.getElementById("player2-name");
const startBtn = document.getElementById("start-btn");
const langToggle = document.getElementById("lang-toggle");
const categorySelect = document.getElementById("category-select");
const timerToggle = document.getElementById("timer-toggle");
const timerDurationSelect = document.getElementById("timer-duration");

const guessHeadingEl = document.getElementById("guess-heading");
const guessTurn = document.getElementById("guess-turn");
const categoryBadge = document.getElementById("category-badge");
const timerDisplay = document.getElementById("timer-display");
const wordLengthText = document.getElementById("word-length-text");
const guessInputs = document.getElementById("guess-inputs");
const guessBtn = document.getElementById("guess-btn");
const gameMessage = document.getElementById("game-message");
const endGameBtn = document.getElementById("end-game-btn");

const turnLabelEl = document.getElementById("turn-label");
const legendGreenEl = document.getElementById("legend-green-text");
const legendOrangeEl = document.getElementById("legend-orange-text");
const legendGrayEl = document.getElementById("legend-gray-text");
const legendBonusEl = document.getElementById("legend-bonus-text");

const score1Element = document.getElementById("score-1");
const score2Element = document.getElementById("score-2");
const scoreCard1 = document.getElementById("score-card-1");
const scoreCard2 = document.getElementById("score-card-2");
const turnNumberElement = document.getElementById("turn-number");

const winnerTitle = document.getElementById("winner-title");
const winnerMessage = document.getElementById("winner-message");
const finalName1 = document.getElementById("final-name-1");
const finalName2 = document.getElementById("final-name-2");
const finalScore1 = document.getElementById("final-score-1");
const finalScore2 = document.getElementById("final-score-2");
const newGameBtn = document.getElementById("new-game-btn");

const themeToggle = document.getElementById("theme-toggle");

/* ============================
   STATE
   ============================ */
let players = [
  { name: "Lama", score: 0 },
  { name: "Laith", score: 0 }
];

let guesserIndex = 0;

let gameLanguage = "en";
let gameCategory = "animals";
let secretWord = "";
let turnNumber = 1;
let gameOver = false;

// تتبع الحروف المثبتة (الأخضر)
let lockedLetters = [];

let timerEnabled = false;
let timerDuration = 30;
let timerInterval = null;
let timeLeft = 0;

function showScreen(screen) {
  [setupScreen, gameScreen, resultScreen]
    .forEach(item => item.classList.remove("active"));

  screen.classList.add("active");
}

function cleanName(value, fallback) {
  return value.trim() || fallback;
}

function pickRandomWord(lang, category) {
  const list = WORD_BANK[lang][category];
  return list[Math.floor(Math.random() * list.length)];
}

/* ============================
   FULL LANGUAGE SWITCH
   ============================ */
function renderCategoryOptions(lang) {
  const previousValue = categorySelect.value || gameCategory;

  categorySelect.innerHTML = "";

  Object.keys(CATEGORY_LABELS[lang]).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${CATEGORY_ICONS[key]} ${CATEGORY_LABELS[lang][key]}`;
    categorySelect.appendChild(option);
  });

  categorySelect.value = previousValue;
}

function applyLanguage(lang) {
  const t = STR[lang];

  appTitleEl.textContent = t.appTitle;
  appSubtitleEl.textContent = t.appSubtitle;
  player1LabelEl.textContent = t.player1Label;
  player2LabelEl.textContent = t.player2Label;
  languageLabelEl.textContent = t.languageLabel;
  categoryLabelEl.textContent = t.categoryLabel;
  timerLabelEl.textContent = t.timerLabel;
  timerEnableTextEl.textContent = t.timerEnableText;
  startBtn.textContent = t.startBtn;
  guessHeadingEl.textContent = t.guessHeading;
  guessBtn.textContent = t.checkGuessBtn;
  turnLabelEl.textContent = t.turnLabel;
  legendGreenEl.textContent = t.legendGreen;
  legendOrangeEl.textContent = t.legendOrange;
  legendGrayEl.textContent = t.legendGray;
  legendBonusEl.textContent = t.legendBonus;
  newGameBtn.textContent = t.playAgainBtn;
  endGameBtn.textContent = t.endGameBtn;

  renderCategoryOptions(lang);

  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

langToggle.addEventListener("click", event => {
  const btn = event.target.closest(".lang-btn");
  if (!btn) return;

  [...langToggle.children].forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  gameLanguage = btn.dataset.lang;
  applyLanguage(gameLanguage);
});

timerToggle.addEventListener("change", () => {
  timerDurationSelect.disabled = !timerToggle.checked;
});

startBtn.addEventListener("click", () => {
  players[0].name = cleanName(player1Input.value, "Player 1");
  players[1].name = cleanName(player2Input.value, "Player 2");

  players[0].score = 0;
  players[1].score = 0;

  gameCategory = categorySelect.value;
  secretWord = pickRandomWord(gameLanguage, gameCategory);

  // تصفير الحروف المثبتة عند بدء لعبة جديدة
  lockedLetters = Array(secretWord.length).fill(null);

  timerEnabled = timerToggle.checked;
  timerDuration = parseInt(timerDurationSelect.value, 10);

  guesserIndex = 0;
  turnNumber = 1;
  gameOver = false;

  turnNumberElement.textContent = turnNumber;

  applyLanguage(gameLanguage);
  updateScores();
  prepareGuessScreen();
});

function prepareGuessScreen() {
  const t = STR[gameLanguage];

  gameMessage.textContent = "";

  guessTurn.textContent = t.guessTurn(players[guesserIndex].name);
  categoryBadge.textContent = `${CATEGORY_ICONS[gameCategory]} ${CATEGORY_LABELS[gameLanguage][gameCategory]}`;
  wordLengthText.textContent = t.wordLength(secretWord.length);

  guessBtn.disabled = false;

  createGuessInputs();
  updateScores();

  showScreen(gameScreen);
  startTimer();
}

function sanitizeChar(value) {
  if (gameLanguage === "ar") {
    return value.replace(/[^\u0621-\u064A]/g, "");
  }

  return value.replace(/[^a-zA-Z]/g, "").toLowerCase();
}

function createGuessInputs() {
  guessInputs.innerHTML = "";

  for (let i = 0; i < secretWord.length; i++) {
    const input = document.createElement("input");

    input.type = "text";
    input.maxLength = 1;
    input.className = "letter-input";
    input.autocomplete = "off";
    input.dataset.index = i;

    // إذا كان الحرف مثبتًا مسبقًا (أخضر)، يتم طباعته وقفله
    if (lockedLetters[i]) {
      input.value = lockedLetters[i];
      input.classList.add("green");
      input.readOnly = true;
    }

    input.addEventListener("input", () => {
      // منع التعديل إذا كان مسبقاً مثبت
      if (lockedLetters[i]) {
        input.value = lockedLetters[i];
        return;
      }

      input.value = sanitizeChar(input.value);

      if (input.value && i < secretWord.length - 1) {
        // الانتقال للخانة القادمة التي ليست مقفلة
        let nextIndex = i + 1;
        while (nextIndex < secretWord.length && lockedLetters[nextIndex]) {
          nextIndex++;
        }
        if (nextIndex < secretWord.length) {
          guessInputs.children[nextIndex].focus();
        }
      }
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Backspace") {
        if (lockedLetters[i]) {
          event.preventDefault();
          return;
        }

        if (!input.value && i > 0) {
          // الرجوع للخانة السابقة غير المقفلة
          let prevIndex = i - 1;
          while (prevIndex >= 0 && lockedLetters[prevIndex]) {
            prevIndex--;
          }
          if (prevIndex >= 0) {
            guessInputs.children[prevIndex].focus();
          }
        }
      }

      if (event.key === "Enter") {
        checkGuess();
      }
    });

    guessInputs.appendChild(input);
  }

  // تركيز الفوكس على أول حقل غير مقفل
  const firstEditable = Array.from(guessInputs.children).find((inp, idx) => !lockedLetters[idx]);
  if (firstEditable) {
    firstEditable.focus();
  }
}

function getGuess() {
  return [...document.querySelectorAll(".letter-input")]
    .map(input => input.value)
    .join("");
}

guessBtn.addEventListener("click", checkGuess);

function checkGuess() {
  if (gameOver) return;

  const t = STR[gameLanguage];
  const guess = getGuess();

  if (guess.length !== secretWord.length) {
    gameMessage.textContent = t.fillAll;
    gameMessage.style.color = "#dc3545";
    return;
  }

  const result = evaluateGuess(guess, secretWord);

  const points = result.reduce((total, state) => {
    if (state === "green") return total + 10;
    if (state === "orange") return total + 5;

    return total;
  }, 0);

  applyColors(result);

  players[guesserIndex].score += points;

  if (guess === secretWord) {
    players[guesserIndex].score += 20;

    gameOver = true;
    stopTimer();

    updateScores();

    gameMessage.textContent = t.won(players[guesserIndex].name);
    gameMessage.style.color = "#22a447";

    disableInputs();

    setTimeout(endGame, 4000);

    return;
  }

  updateScores();

  gameMessage.textContent = t.earned(players[guesserIndex].name, points);

  gameMessage.style.color =
    points > 0 ? "#1769e0" : "#87909b";

  stopTimer();
  setTimeout(switchGuesser, 1100);
}

function evaluateGuess(guess, word) {
  const result = Array(word.length).fill("gray");
  const remaining = word.split("");

  // 1. Green = exact position
  for (let i = 0; i < word.length; i++) {
    if (guess[i] === word[i]) {
      result[i] = "green";
      remaining[i] = null;
      // تثبيت الحرف في مكان الصحيح دائماً
      lockedLetters[i] = guess[i];
    }
  }

  // 2. Orange = correct letter, wrong position
  for (let i = 0; i < word.length; i++) {
    if (result[i] === "green") continue;

    const foundIndex = remaining.indexOf(guess[i]);

    if (foundIndex !== -1) {
      result[i] = "orange";
      remaining[foundIndex] = null;
    }
  }

  return result;
}

function applyColors(result) {
  const inputs = document.querySelectorAll(".letter-input");

  inputs.forEach((input, index) => {
    input.classList.remove("green", "orange", "gray");
    input.classList.add(result[index]);
  });
}

function disableInputs() {
  document.querySelectorAll(".letter-input")
    .forEach(input => {
      input.disabled = true;
    });

  guessBtn.disabled = true;
}

function switchGuesser() {
  if (gameOver) return;

  guesserIndex = guesserIndex === 0 ? 1 : 0;

  turnNumber++;
  turnNumberElement.textContent = turnNumber;

  prepareGuessScreen();
}

/* ============================
   TIMER
   ============================ */
function startTimer() {
  clearInterval(timerInterval);

  if (!timerEnabled) {
    timerDisplay.textContent = "";
    timerDisplay.classList.remove("warning");
    return;
  }

  timeLeft = timerDuration;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimerDisplay() {
  const t = STR[gameLanguage];

  timerDisplay.textContent = t.seconds(timeLeft);
  timerDisplay.classList.toggle("warning", timeLeft <= 5);
}

function handleTimeout() {
  if (gameOver) return;

  const t = STR[gameLanguage];

  gameMessage.textContent = t.timeUp(players[guesserIndex].name);
  gameMessage.style.color = "#dc3545";

  disableInputs();

  setTimeout(switchGuesser, 1200);
}

function endGame() {
  const t = STR[gameLanguage];

  stopTimer();

  finalName1.textContent = players[0].name;
  finalName2.textContent = players[1].name;

  finalScore1.textContent = players[0].score;
  finalScore2.textContent = players[1].score;

  if (players[0].score > players[1].score) {
    winnerTitle.textContent = t.winnerTitle(players[0].name);
    winnerMessage.textContent = t.winnerMessage(players[0].name);
  } else if (players[1].score > players[0].score) {
    winnerTitle.textContent = t.winnerTitle(players[1].name);
    winnerMessage.textContent = t.winnerMessage(players[1].name);
  } else {
    winnerTitle.textContent = t.draw;
    winnerMessage.textContent = t.drawMessage;
  }

  showScreen(resultScreen);
}

function updateScores() {
  score1Element.textContent = players[0].score;
  score2Element.textContent = players[1].score;

  document.getElementById("name-1").textContent = players[0].name;
  document.getElementById("name-2").textContent = players[1].name;

  scoreCard1.classList.toggle(
    "active-player",
    guesserIndex === 0
  );

  scoreCard2.classList.toggle(
    "active-player",
    guesserIndex === 1
  );
}

endGameBtn.addEventListener("click", () => {
  const t = STR[gameLanguage];

  const confirmed = window.confirm(t.endGameConfirm);
  if (!confirmed) return;

  gameOver = true;
  stopTimer();
  disableInputs();

  endGame();
});

newGameBtn.addEventListener("click", () => {
  stopTimer();

  player1Input.value = players[0].name;
  player2Input.value = players[1].name;

  players[0].score = 0;
  players[1].score = 0;

  guesserIndex = 0;
  turnNumber = 1;
  gameOver = false;
  
  // تصفير الحروف المثبتة عند الرجوع للقائمة الرئيسية
  lockedLetters = [];

  applyLanguage(gameLanguage);
  showScreen(setupScreen);
});

/*
   DARK / LIGHT MODE
*/
themeToggle.addEventListener("click", () => {
  const current =
    document.documentElement.dataset.theme || "light";

  const next = current === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = next;

  localStorage.setItem("guess-theme", next);

  themeToggle.textContent =
    next === "dark" ? "☀️" : "🌙";
});

const savedTheme =
  localStorage.getItem("guess-theme") || "light";

document.documentElement.dataset.theme = savedTheme;

themeToggle.textContent =
  savedTheme === "dark" ? "☀️" : "🌙";

/* Initial render */
applyLanguage(gameLanguage);