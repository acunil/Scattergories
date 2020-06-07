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

// Publish Scattergories to DOM
const scattersToDom = function () {
  let libList = document.getElementById("library-list");
  generateScattergories(shuffledLibrary).forEach((cat) => {
    let node = document.createElement("li");
    libList.appendChild(node);
    node.innerHTML = cat;
  });
};
scattersToDom();

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

// Publish Library to Dom
Library.forEach((cat) => {
  let node = document.createElement("li");
  document.getElementById("library-list-popup").appendChild(node);
  node.innerHTML = cat;
});
const libToggle = document.getElementById("toggle-library");
libToggle.onclick = () => {
  // Button toggle
  if (libToggle.innerText === "View Library") {
    // Library view
    libToggle.innerText = "View Scattergories";
    // document.getElementById("library").appendChild(library);
    // Object.assign(library.style, styles);
    document.getElementById("library-list").style.display = "none";

    document.getElementById("library-list-popup").style.display = "block";
  } else {
    // Scattergory view
    libToggle.innerText = "View Library";
    document.getElementById("library-list").style.display = "block";
    document.getElementById("library-list-popup").style.display = "none";
  }
};
