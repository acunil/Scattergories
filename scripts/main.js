"use strict";

// IMPORTS
import { randomLetter, generateScattergories } from "./functions.js";
import { Library } from "./library.js";

// One time shuffle of Library. Ensures non-repeating between rounds. generateScattegories() will use splice to destructively take first n elements each round.
const shuffledLibrary = (() => {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // swap elements array[i] and array[j] using "destructuring assignment" syntax
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  var tempLibrary = [...Library];
  shuffle(tempLibrary);
  return tempLibrary;
})();

// Publish Library to DOM
const libraryToDom = function () {
  var libHtml = document.getElementById("library-list");
  generateScattergories(shuffledLibrary).forEach((cat) => {
    let node = document.createElement("li");
    libHtml.appendChild(node);
    node.innerHTML = cat;
  });
};
libraryToDom();

// Publish randomLetter to DOM
const letterToDom = function () {
  var letterHtml = document.getElementById("random-letter");
  letterHtml.innerHTML = randomLetter().toUpperCase();
};
letterToDom();

// Reroll letter
document.getElementById("reroll").onclick = () => {
  letterToDom();
};
