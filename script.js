let optiuni = ["rock", "paper", "scissors"];
let calculator = optiuni[Math.floor(Math.random() * 3)];

let maintext = document.querySelector(".main-text");
let subtitle = document.querySelector(".subtitle");
let vs = document.querySelector(".vs");
let mg = document.querySelector(".main-game");
let winText = document.querySelector(".win-text");

let rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
  paper.style.display = "none";
  scissors.style.display = "none";
  maintext.style.display = "none";
  subtitle.style.display = "none";
  mg.classList.add("flex-style");
  vs.style.display = "block";
  rock.classList.add("hovered");
  console.log("rock");
  console.log("Calculatorul are " + calculator);
  document.querySelector(".bot").src = calculator + ".png";
  if (calculator == "rock") {
    console.log("Egalitate!");
    wait("Egalitate!");
  }
  if (calculator == "paper") {
    console.log("Ai pierdut!");
    wait("Ai pierdut!");
  }
  if (calculator == "scissors") {
    console.log("Ai castigat!");
    wait("Ai castigat!");
  }
});

let paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
  rock.style.display = "none";
  scissors.style.display = "none";
  maintext.style.display = "none";
  subtitle.style.display = "none";
  vs.style.display = "block";
  mg.classList.add("flex-style");
  paper.classList.add("hovered");
  console.log("paper");
  console.log("Calculatorul are " + calculator);
  document.querySelector(".bot").src = calculator + ".png";
  if (calculator == "rock") {
    console.log("Ai castigat!");
    wait("Ai castigat!");
  }
  if (calculator == "paper") {
    console.log("Egalitate!");
    wait("Egalitate!");
  }
  if (calculator == "scissors") {
    console.log("Ai pierdut!");
    wait("Ai pierdut!");
  }
});

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
  paper.style.display = "none";
  rock.style.display = "none";
  maintext.style.display = "none";
  subtitle.style.display = "none";
  vs.style.display = "block";
  mg.classList.add("flex-style");
  scissors.classList.add("hovered");
  document.querySelector(".bot").src = calculator + ".png";
  console.log("scissors");
  console.log("Calculatorul are " + calculator);
  if (calculator == "rock") {
    console.log("Ai pierdut!");
    wait("Ai pierdut!");
  }
  if (calculator == "paper") {
    console.log("Ai castigat!");
    wait("Ai castigat!");
  }
  if (calculator == "scissors") {
    console.log("Egalitate!");
    wait("Egalitate!");
  }
});

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  calculator = optiuni[Math.floor(Math.random() * 3)];
  document.location.reload(true);
});

function wait(text) {
  setTimeout(() => {
    winText.innerHTML = text;
    paper.style.display = "none";
    rock.style.display = "none";
    scissors.style.display = "none";
    vs.style.display = "none";
    document.querySelector(".bot").style.display = "none";
    reset.style.display = "block";
  }, 2000);
}
