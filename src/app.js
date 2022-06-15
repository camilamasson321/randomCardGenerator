/* eslint-disable */
import "./style.css";

let numbers = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];
let suit = ["♦", "♥", "♠", "♣"];

function getRandomInt(array) {
  return Math.floor(Math.random() * array.length);
}
const randomNumber = numbers[getRandomInt(numbers)];
const randomSuit = suit[getRandomInt(suit)];

window.onload = function() {
  document.querySelector(".topSuit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = randomNumber;
  document.querySelector(".bottomSuit").innerHTML = randomSuit;
};

if ((randomSuit === suit[0]) | (randomSuit === suit[1])) {
  document.querySelector(".topSuit").style.color = "red";
  document.querySelector(".bottomSuit").style.color = "red";
} else document.querySelector(".card").style.color = "black";
