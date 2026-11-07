
const welcomeScreen = document.getElementById("welcomeScreen");
const mainScreen = document.getElementById("mainScreen");

const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const buttons = document.getElementById("buttons");
const result = document.getElementById("result");
const finalMessage = document.getElementById("finalMessage");

const continueBtn = document.getElementById("continueBtn");
const replayBtn = document.getElementById("replayBtn");

const hearts = document.getElementById("hearts");


// START SURPRISE AND ENTER FULLSCREEN

startBtn.addEventListener("click", async () => {

  try {
    await document.documentElement.requestFullscreen();
  } catch (error) {
    console.log("Fullscreen is unavailable:", error);
  }

  welcomeScreen.style.display = "none";
  mainScreen.style.display = "flex";

  createHearts(15);
});


// NO BUTTON RUNS AWAY

function moveNoButton() {

  const card = document.querySelector(".card");

  const maxX = card.clientWidth - noBtn.offsetWidth - 20;
  const maxY = card.clientHeight - noBtn.offsetHeight - 20;

  noBtn.style.position = "absolute";

  noBtn.style.left =
    Math.random() * Math.max(0, maxX) + "px";

  noBtn.style.top =
    Math.random() * Math.max(0, maxY) + "px";
}

noBtn.addEventListener("pointerenter", moveNoButton);

noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});


// YES BUTTON

yesBtn.addEventListener("click", async () => {

  // Exit fullscreen
  if (document.fullscreenElement) {
    try {
      await document.exitFullscreen();
    } catch (error) {
      console.log(error);
    }
  }

  // Hide question buttons
  buttons.style.display = "none";

  // Show love message
  result.style.display = "block";

  // Heart celebration
  createHearts(50);

});


// CONTINUE BUTTON

continueBtn.addEventListener("click", () => {

  result.style.display = "none";

  finalMessage.style.display = "block";

  createHearts(60);

});


// REPLAY SURPRISE

replayBtn.addEventListener("click", () => {

  finalMessage.style.display = "none";
  result.style.display = "none";

  buttons.style.display = "flex";

  noBtn.style.position = "relative";
  noBtn.style.left = "auto";
  noBtn.style.top = "auto";

  welcomeScreen.style.display = "flex";
  mainScreen.style.display = "none";

});


// FLOATING HEARTS FUNCTION

function createHearts(amount) {

  for (let i = 0; i < amount; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    const heartTypes = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
      heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
      (2 + Math.random() * 3) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }

}

