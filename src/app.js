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

let changeColor = suit[(0, 1)];
if (changeColor) {
  document.getElementById(changeColor).style.color = `red`;
}
