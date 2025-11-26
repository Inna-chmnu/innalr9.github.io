const catcards = [
    {name:"6", value:6,  img:"img/6.png"},
    {name:"7", value:7,  img:"img/7.png"},
    {name:"8", value:8,  img:"img/8.png"},
    {name:"9", value:9,  img:"img/9.png"},
    {name:"10",value:10, img:"img/10.png"},
    {name:"J", value:2,  img:"img/J.png"},
    {name:"Q", value:3,  img:"img/Q.png"},
    {name:"K", value:4,  img:"img/K.png"},
    {name:"A", value:11, img:"img/A.png"},
];

let round = 1;
let allpeople = 0;
let allcomuter = 0;

let peopleOElem = document.getElementById("peopleO");
const comuterOElem = document.getElementById("comuterO");
const pCardElem = document.getElementById("pCard");
const comuterCardElem = document.getElementById("comuterCard");
const resultElem = document.getElementById("result");
const numroundElem = document.getElementById("numround");

let username = prompt("Введіть ваше ім'я:") || "";
username = username.trim();
if(!username) username = "User";

document.getElementById("userBox").innerHTML = `${username}: <span id='peopleO'>0</span>`;
peopleOElem = document.getElementById("peopleO");

document.getElementById("generate").addEventListener("click", () => {

  if (round > 3) {
    alert("Гра завершена!");
    return;
  }
  const playerCard = catcards[Math.floor(Math.random() * catcards.length)];
  const compCard   = catcards[Math.floor(Math.random() * catcards.length)];

  pCardElem.src = playerCard.img;
  comuterCardElem.src = compCard.img;

  allpeople  += playerCard.value;
  allcomuter += compCard.value;

  peopleOElem.textContent = allpeople;
  comuterOElem.textContent = allcomuter;
if (allpeople > 21) {
    resultElem.textContent = `${username} Loser!!!`;
    round = 4; 
    return;
  }

  if (allcomuter > 21) {
    resultElem.textContent = "Computer Loser!!!";
    round = 4; 
    return;
  }
  round++;
  numroundElem.textContent = round <= 3 ? round : 3;

  if (round > 3) {
    if (allpeople > allcomuter) resultElem.textContent = `${username} Winner!`;
    else if (allpeople < allcomuter) resultElem.textContent = "Computer Winner!";
    else resultElem.textContent = "Нічия!";
  }
});
